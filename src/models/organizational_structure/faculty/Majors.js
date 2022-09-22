const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const majorSchema = new Schema({
    facultyId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    introduction: {
        type: String,
    },
    foundYear: {
        type: Date,
    },
    award: [{
        awardId: Schema.Types.ObjectId,
    }],
    lecturerList: [{
        lecturerId: Schema.Types.ObjectId,
        headOfSection: Boolean,
        eputyHead: Boolean,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('majors', majorSchema);