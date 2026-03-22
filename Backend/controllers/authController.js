const bcrypt = require("bcrypt");
const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const saltRound = 10;

exports.signUp = async (req, res) => {
    try{
        const {name,phone,email,password,role} = req.body;
        // check if user aready exists
        const existingEmail = await User.findOne({email});
        const existingPhone = await User.findOne({phone});

        if(existingEmail || existingPhone){
            return res.status(400).json({
                success:false,
                message:"User already exists",
            })
        }

        // secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,saltRound);
        }catch(error){
            return res.status(500).json({
                success:false,
                message:"Error is password hashing"
            })
        }

        // if new user --> perform signUp
        // create entry for the user
        const user = await User.create({
            name,phone,email,password:hasdhedPassword,role
        })

        return res.status(200).json({
            success:true,
            message:"✅ SignUp successfully"
        })

    }catch(err){
        console.error(err);
        return res.status(401).json({
            success:false,
            message:"Authorization failed"
        })
    }
}

exports.logIn = async (req, res) => {
    try {
        const { phone, email, password } = req.body;

        if ((!phone && !email) || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide phone/email and password",
            });
        }

        // find user
        let user = await User.findOne({$or: [{ phone }, { email }]});

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "‼️ User not registered ‼️"
            });
        }

        // password check
        if (await bcrypt.compare(password, user.password)) {

            const payload = {
                phone: user.phone,
                email: user.email,
                id: user._id,
                role: user.role,
            };

            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "30d",
            });

            user = user.toObject();
            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "Strict",
            };

            return res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "✅ LoggedIn successfully",
            });

        } else {
            return res.status(403).json({
                success: false,
                message: "❌ Incorrect Password",
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login Failure",
        });
    }
};

