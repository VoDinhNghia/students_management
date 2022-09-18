const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
    },
    type: { // practice room, theory room
        type: String
    },
    capacity: {
        type: Number,
    },
    divice: {
        projector: String,
        airConditioner: String,
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

module.exports = mongoose.model('rooms', roomSchema);