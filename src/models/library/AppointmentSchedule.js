const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    serviceId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    receivedDate: {
        date: { type: Date },
        status: {
            type: String, // expired, accepted, cancel,
        },
    },
    returnSchedule: {
        date: { type: Date },
        status: {
            type: String, // extend, paid,
        },
        extensionDate: {
            type: Date,
        },
        extensionCost: {
            type: Number
        }
    },
    amount: {
        type: Number,
    },
    booksList: [{
        type: Schema.Types.ObjectId,
    }],
    roomsList: [{
        type: Schema.Types.ObjectId,
    }],
    magazineList: [{
        type: Schema.Types.ObjectId,
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

module.exports = mongoose.model('appointmentSchedules', appointmentSchema);