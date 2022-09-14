const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const libararySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    foundYear: {
        type: Date,
    },
    librarian: {
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

module.exports = mongoose.model('libararies', libararySchema);