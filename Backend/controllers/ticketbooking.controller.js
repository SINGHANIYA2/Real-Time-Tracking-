const ticketBooking = require('../models/ticketbooking.models.js');

exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        const passengerName = bookingData.passengerName;
        const email = bookingData.email;
        const phone = bookingData.phone;
        const pickupLocation = bookingData.pickupLocation;
        const dropoffLocation = bookingData.dropoffLocation;
        const travelDate = bookingData.travelDate;
        const departureTime = bookingData.departureTime;
        const couponCode = bookingData.couponCode;
        const discount = bookingData.discount;
        const ticketPrice = bookingData.ticketPrice;
        const totalamount = bookingData.totalamount;
        const userId = bookingData.userId;

        if (!passengerName) return res.status(400).json({ error: 'Enter passenger name' });
        if (!email) return res.status(400).json({ error: 'Enter email' });
        if (!phone) return res.status(400).json({ error: 'Enter phone number' });
        if (!pickupLocation) return res.status(400).json({ error: 'Enter pickup Location' });
        if (!dropoffLocation) return res.status(400).json({ error: 'Enter dropoff Location' });
        if (!travelDate) return res.status(400).json({ error: 'Enter travel date' });
        if (!departureTime) return res.status(400).json({ error: 'Enter departure time' });
        if (!ticketPrice) return res.status(400).json({ error: 'Enter ticket price' });
        if (!totalamount) return res.status(400).json({ error: 'Enter total amount' });

        const coupons = {
            'FIRST20': 20,
            'SAVE20': 20,
            'FLAT50': 50,
        };
        let discountAmount = (couponCode && coupons[couponCode]) ? (ticketPrice * coupons[couponCode] / 100) : 0;
        let totalPrice = ticketPrice - discountAmount;

        const booking = new ticketBooking({
            passengerName, email, phone, pickupLocation, dropoffLocation,
            travelDate, departureTime, discount: discountAmount, ticketPrice, totalPrice: totalPrice, status: 'confirmed'
        })

        await booking.save();

        res.status(201).json({
            success: true,
            message: 'Ticket Comfirmed',
            booking: booking
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to book ticket',
            error: err.message
        })
    }
}