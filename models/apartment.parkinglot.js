const mongoose = require('mongoose');
const state = ['awaiting activation','active', 'suspended']
const ParkingSchema = new mongoose.Schema({
    number: {
        type: String
    },
    apartmentId: {
        type: Number
    },
    state: {
        type: String,
        default: state[2]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    createdBy: {
        type: String
    },
    updatedtBy: {
        type: String
    }
}, { versionKey: false })
const Parking = mongoose.model('Parking', ParkingSchema);
module.exports = Parking;