const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    lecturerId: { // Lecturer in charge
        type: Schema.Types.ObjectId,
        required: true
    },
    facultyId: {
        type: Schema.Types.ObjectId,
    },
    courseId: { // Lecturer in charge
        type: Schema.Types.ObjectId,
    },
    degreeLevelId: { // Formal university, College...
        type: Schema.Types.ObjectId,
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
        learnDate: Date, // monday
        time: String, // 8h - 10h A.M
        startDate: Date,
        endDate: Date,
        semester: Schema.Types.ObjectId,
        process: Schema.Types.ObjectId, // will have collection for schedule subject.
    },
    size: { // total student
        type: Number,
    },
    numberOfCredits: { // 3 TC
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('subjectlists', subjectSchema);