const mongoose = require("mongoose");

require("dotenv").config()

const dbConnect = async () => {
    try{
        console.log("URL:", process.env.BASE_URL);
        await mongoose.connect(process.env.BASE_URL,{
            family:4,
        });
        console.log("DB connected successfully");
    } catch (err) {
        console.error("DB connection failed", err);
        process.exit(1);
    }
}

module.exports = dbConnect