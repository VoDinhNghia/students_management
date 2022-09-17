const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    name: { // k12 
        type: String,
        required: true,
    },
    year: {
        type: Date,
    },
    total: { // total student of course
        type: Number,
    },
    facultyId: {
        type: Schema.Types.ObjectId,
    },
    trainingTime: {
        maximum: {
            type: Number, // 7 year
        },
        minimum: {
            type: Number, // 3 year
        }
    },
    schedule: [{
        semesterId: Schema.Types.ObjectId,
        subjectList: [{ type: Schema.Types.ObjectId }], // [Nhap mon lap trinh]
    }],
    output: {
        toeic: String, // toeic 450
        It: String,
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

module.exports = mongoose.model('courses', coursesSchema);