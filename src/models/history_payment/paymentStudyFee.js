const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentStudyFeeSchema = new Schema({
    receiptId: { // random
        type: Number
    },
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
    },
    subjectListId: [{ // When registering for a course, the data will be synchronized with this table to create and update
        subject: {
            type: Schema.Types.ObjectId,
        },
        total: { // Total amount to pay for this course (ex: 3TC * Amount per credit)
            type: Number
        }
    }],
    payments: { // cash or online
        description: {
            type: String,
        },
        bank: { // if cash => null
            type: String,
        },
        numberAccout: { // if cash => null
            type: Number,
        },
        type: {
            type: String,
        }
    },
    semesterId: {
        type: Schema.Types.ObjectId,
    },
    status: {
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

module.exports = mongoose.model('paymentstudyfee', PaymentStudyFeeSchema);