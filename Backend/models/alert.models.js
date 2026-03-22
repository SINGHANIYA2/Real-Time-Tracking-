const mongoose = require('mongoose')

const alertSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    severity: {
        type: String,
        enum: ['critical', 'warning', 'info'],
        default: 'info',
    },
    location: {
        address: { type: String },
        lat: { type: Number },
        lng: { type: Number },
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: false,
    },
    isactive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true })

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;