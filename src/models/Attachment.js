const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attachmentSchema = new Schema({
    name: {
        type: String,
    },
    path: {
        type: String,
    },
    uploadBy: {
        type: Schema.Types.ObjectId
    },
    type: {
        type: String,
    },
    url: {
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

module.exports = mongoose.model('attachments', attachmentSchema);