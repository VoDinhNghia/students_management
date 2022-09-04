const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const awardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Date,
    },
    location: {
        type: String,
    },
    type: {
        type: String,
    },
    description: {
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

module.exports = mongoose.model('awards', awardSchema);