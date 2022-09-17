const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolInfoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    schoolCode: {
        type: String,
    },
    numberTotal: { // student + lecture + leader ...
        type: Number,
    },
    image: [
        { type: Schema.Types.ObjectId } // attachment Id
    ],
    award: [
        { type: Schema.Types.ObjectId }
    ],
    location: {
        province: String,
        countryId: Schema.Types.ObjectId,
        city: String,
        state: String,
        address: String,
    },
    contactInfo: {
        email: String,
        fax: String,
        mobile: String,
    },
    policy: [{
        name: String,
        effectiveDate: Date,
        content: String,
        attachmentId: Schema.Types.ObjectId,
    }],
    yearFound: {
        type: Date,
    },
    generalInfo: {
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

module.exports = mongoose.model('schoolinfos', schoolInfoSchema);