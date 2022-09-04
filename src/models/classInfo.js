const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name: {
        type: String
    },
    courseYear: {
        type: String
    },
    classSize: {
        type: Number
    },
    faculty: { // in which department?
        type: Schema.Types.ObjectId
    },
    homeroomTeacherId: {
        type: Schema.Types.ObjectId
    },
    yearbook: [{
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

module.exports = mongoose.model('classInfo', blogSchema);