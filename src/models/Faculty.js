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
    award: [{
        awardId: Schema.Types.ObjectId,
    }],
    deanFaculty: {
        type: Schema.Types.ObjectId,
    },
    vicePresident: {
        type: Schema.Types.ObjectId,
    },
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