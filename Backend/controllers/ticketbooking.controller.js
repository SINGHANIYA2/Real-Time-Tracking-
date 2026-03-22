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

        const fields = [
                { value: email, message: "Enter email" },
                { value: phone, message: "Enter phone number" },
                { value: pickupLocation, message: "Enter pickup Location" },
                { value: dropoffLocation, message: "Enter dropoff Location" },
                { value: travelDate, message: "Enter travel date" },
                { value: departureTime, message: "Enter departure time" },
                { value: ticketPrice, message: "Enter ticket price" },
                { value: totalamount, message: "Enter total amount" },
            ];

        for (let field of fields) {
            if (!field.value) {
                return res.status(400).json({
                    success: false,
                    error: field.message,
                });
            }
        }

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