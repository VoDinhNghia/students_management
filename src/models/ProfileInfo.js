const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    classId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    avatar: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    gender: {
        type: String,
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

module.exports = mongoose.model('profileInfo', blogSchema);