const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjectProcessSchema = new Schema({
    lecturerId: { // Lecturer in charge
        type: Schema.Types.ObjectId,
        required: true
    },
    subjectId: {
        type: Schema.Types.ObjectId,
    },
    midTermTest: {
        week: Number,
        time: Number, // 60'
        outPut: String, // content Test
        percent: String, // 30%
    },
    finalExam: {
        week: Number,
        time: Number, // 60'
        outPut: String, // content Test
        percent: String, // 50%
    },
    studentEssay: {
        week: Number,
        time: Number, // 60'
        outPut: String, // content Test
        percent: String // 20%
    },
    report: [{
        week: Number,
        studentsAbsent: [{ type: Schema.Types.ObjectId }]
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

module.exports = mongoose.model('subjectprocess', subjectProcessSchema);