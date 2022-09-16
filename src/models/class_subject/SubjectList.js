const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    lecturerId: { // Lecturer in charge
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    openTime: {
        type: Date,
    },
    closeTime: {
        type: Date,
    },
    schedule: {
        learnDate: String, // monday,....
        startDate: Date,
        endDate: Date,
        semester: Schema.Types.ObjectId,
    },
    size: { // total student
        type: Number,
    },
    numberOfCredits: {
        type: Number,
    },
    numberOfFailed: {
        type: Number,
    },
    numberOfPass: {
        type: Number,
    },
    comment: {
        type: String,
    },
    status: { // open or closed
        type: Boolean,
    },
    facultyId: {
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

module.exports = mongoose.model('subjectLists', subjectSchema);