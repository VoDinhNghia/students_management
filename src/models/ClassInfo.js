const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name: {
        type: String
    },
    courseYear: {
        type: String
    },
    classSize: {
        type: Number
    },
    majorId: { // in which majors?
        type: Schema.Types.ObjectId
    },
    homeroomTeacherId: {
        type: Schema.Types.ObjectId
    },
    yearbook: [{ // yearbook photo
        attachmentId: Schema.Types.ObjectId
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

module.exports = mongoose.model('classInfo', ClassSchema);