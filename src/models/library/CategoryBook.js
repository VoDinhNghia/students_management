const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryBookSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    amount: {
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

module.exports = mongoose.model('categoriesbooks', categoryBookSchema);