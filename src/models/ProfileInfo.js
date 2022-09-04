const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    classId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    avatar: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    gender: {
        type: String,
    },
    listSubject: [ // list subject
        {
            subjectId: Schema.Types.ObjectId,
            status: String, // failed or pass
        }
    ],
    study: [{ // research articles, graduate theses
        attachmentId: Schema.Types.ObjectId,
    }],
    award: [{
        awardId: Schema.Types.ObjectId,
    }],
    location: [{
        province: String,
        countryId: Schema.Types.ObjectId,
        state: String,
        permanentAddress: String,
        temporaryAddress,
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

module.exports = mongoose.model('profileInfo', profileSchema);