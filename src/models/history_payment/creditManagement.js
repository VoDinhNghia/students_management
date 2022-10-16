const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creditManagementSchema = new Schema({
    name: {
        type: Number
    },
    total: { // money per credit
        type: Number,
        require: true,
    },
    semesterId: {
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

module.exports = mongoose.model('creditmanagement', creditManagementSchema);