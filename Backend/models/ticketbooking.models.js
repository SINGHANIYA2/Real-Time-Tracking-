const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    passengerName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    pickupLocation: {
        type: String,
        required: true,
    },
    dropoffLocation: {
        type: String,
        required: true,
    },
    travelDate: {
        type: Date,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    couponCode: {
        type: String,
        required: false,
    },
    discount: {
        type: Number,
        required: false,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    totalamount: {
        type: Number,
        required: true,
    }
    , status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }
}, { timestamps: true })

export const Booking = mongoose.model('Booking', bookingSchema);