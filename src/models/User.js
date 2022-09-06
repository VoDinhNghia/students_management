const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    passWord: {
        type: String,
        required: true,
    },
    statusLogin: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String, // Inactive or active
    },
    role: {
        type: String,
        required: true,
    },
    historyLogin: [{
        divice: String,
        date: Date,
        host: String,
        origin: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('userInfo', UserSchema);