const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facultySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    foundYear: {
        type: Date,
    },
    introduction: {
        type: String,
    },
    award: [{
        awardId: Schema.Types.ObjectId,
    }],
    lecturerList: [{
        lecturerId: Schema.Types.ObjectId,
        deanFaculty: Boolean,
        vicePresident: Boolean,
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

module.exports = mongoose.model('facultys', facultySchema);