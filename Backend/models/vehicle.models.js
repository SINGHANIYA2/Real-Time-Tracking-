const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    vehicleNumber: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'in_service', 'maintenance'],
        default: 'available',
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    currentLocation: {
        lat: { type: Number },
        lng: { type: Number },
    },
    route: {
        type: String,
        required: false,
    }, lastUpdated: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true })

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);