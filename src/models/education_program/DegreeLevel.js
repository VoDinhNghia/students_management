const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const degreeLevelSchema = new Schema({
    name: {
        type: String,
        required: true,
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

module.exports = mongoose.model('degreelevels', degreeLevelSchema);