const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
    name: { // DHKHMT12A 
        type: String
    },
    courseId: {
        type: Schema.Types.ObjectId,
    },
    degreeLevelId: { // Formal university, College...
        type: Schema.Types.ObjectId,
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

module.exports = mongoose.model('classInfos', ClassSchema);