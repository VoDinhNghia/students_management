const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderSchoolSchema = new Schema({
    partyCommittee: [{
        userId: Schema.Types.ObjectId,
        acceptDate: Date
    }],
    leader: [{
        userId: Schema.Types.ObjectId,
        term: String,
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

module.exports = mongoose.model('leaderschools', leaderSchoolSchema);