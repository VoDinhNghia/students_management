const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookShelfSchema = new Schema({
    name: {
        type: String,
    },
    roomId: {
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

module.exports = mongoose.model('bookshelfs', bookShelfSchema);