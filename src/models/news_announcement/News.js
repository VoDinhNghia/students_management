const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    content: {
        type: Text,
    },
    url: {
        type: String,
    },
    attachment: {
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

module.exports = mongoose.model('news', newsSchema);