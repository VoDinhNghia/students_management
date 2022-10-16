const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    classId: {
        type: Schema.Types.ObjectId,
    },
    facultyId: {
        type: Schema.Types.ObjectId,
    },
    courseId: { // for student
        type: Schema.Types.ObjectId,
    },
    degreeLevelId: { // Formal university, College...
        type: Schema.Types.ObjectId,
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
    study: [{ // research articles, graduate theses
        attachmentId: Schema.Types.ObjectId,
        semesterId: Schema.Types.ObjectId,
        type: String,
    }],
    studyProcess: {
        listSemester: [{
            semesterId: {
                type: Schema.Types.ObjectId
            },
            listSubject: [ // list subject
                {
                    subjectId: Schema.Types.ObjectId,
                    result: String, // failed or pass
                }
            ],
        }],
        toeicCertificate: {
            status: Boolean,
            attachmentId: Schema.Types.ObjectId,
            scores: Number,
        },
        itCertificate: {
            status: Boolean,
            attachmentId: Schema.Types.ObjectId,
            scores: Number,
        },
        status: String, // Are you still studying or graduating or saving?
    },
    dateOfBirth: {
        type: Date,
    },
    joinDate: {
        type: Date,
    },
    endDate: {
        type: Date
    },
    positionHeld: [{ // class president, secretary
        type: String,
    }],
    award: [{
        awardId: Schema.Types.ObjectId,
    }],
    location: {
        province: String,
        countryId: Schema.Types.ObjectId,
        state: String,
        permanentAddress: String,
        temporaryAddress: String,
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

module.exports = mongoose.model('profileInfos', profileSchema);