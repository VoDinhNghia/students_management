const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    content: {
        type: String,
    },
    images: [
        { attachmentId: Schema.Types.ObjectId }
    ],
    comments: [{
        userId: Schema.Types.ObjectId,
        content: String,
    }],
    likes: [{
        userId: Schema.Types.ObjectId,
        status: Number, // 0 like, 1 dislike
        emotion: String // link path in folder public to get url
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

module.exports = mongoose.model('blogs', blogSchema);