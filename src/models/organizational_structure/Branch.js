const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    website: {
        type: String,
    },
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('branchs', branchSchema);