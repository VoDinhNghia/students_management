const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const majorSchema = new Schema({
    facultyId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    foundYear: {
        type: Date,
    },
    award: [{
        awardId: Schema.Types.ObjectId,
    }],
    headOfSection: {
        type: Schema.Types.ObjectId,
    },
    eputyHead: {
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

module.exports = mongoose.model('majors', majorSchema);