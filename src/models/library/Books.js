const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
    },
    categoryBookId: {
        type: Schema.Types.ObjectId,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
    },
    publishYear: {
        type: String,
    },
    amount: {
        type: Number,
    },
    loanAmount: {
        type: Number,
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

module.exports = mongoose.model('books', bookSchema);