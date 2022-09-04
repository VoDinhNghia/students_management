const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    passWord: {
        type: String,
        required: true,
    },
    status: {
        type: String,
    },
    role: {
        type: String,
        required: true,
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

module.exports = mongoose.model("userInfo", blogSchema);