//Default Imports
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import randomString from 'randomstring';
import path from 'path';
import { fileURLToPath } from "url";

//Import Models
import { User } from '../models/userModel.js';
import ResetPassword from "../models/resetPasswordModel.js";
import BlackList from "../models/blackList.js";
// import OTP from "../models/otp.js";

//Import helpers
import { deleteImage } from "../helpers/deleteImage.js";
import { sendMail } from '../helpers/mailer.js';
import { otpOneMinuteValidation } from '../helpers/otpValidate.js';
import cloudinary from "../helpers/cloudinary.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateAccessToken = async (userData) => {
    return jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1hr' });
}
const generateRefreshToken = async (userData) => {
    return jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2hr' });
}

const generateRandomOTP = async () => {
    return Math.floor(1000 + Math.random() * 9999)
}

export const registerUserController = async (req, res) => {
    try {
        const { name, email, mobile, password, role } = req.body;
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required!",
            });
        }

        let ifUserExist = await User.findOne({ $or: [{ email }, { mobile }] });
        if (ifUserExist) {
            return res.status(400).json({
                success: false,
                message: ifUserExist.email === email ? "Email already registered!" : "Mobile number already registered!"
            });
        }

        let uploadResult;

        try {
            uploadResult = await cloudinary.uploader.upload(req.file.path, { folder: "food-delivery" });
        } catch (cloudErr) {
            return res.status(500).json({
                success: false,
                message: "Failed to upload image to Cloudinary",
                error: cloudErr.message,
            });
        }

        const secureImageUrl = uploadResult.secure_url;
        const publicId = uploadResult.public_id;

        let hashedPassword = await bcrypt.hash(password, 10);
        try {
            let newUser = new User({ name, email, mobile, role, provider: "local", is_verified: false, password: hashedPassword, image: secureImageUrl, image_public_id: publicId });
            const userData = await newUser.save();
            const access_token = await generateAccessToken({ user: newUser });
            const refresh_token = await generateRefreshToken({ user: newUser });

            //Send verification email
            const message = `<p>Hii, ${name}, Please <a href='http://localhost:8000/mail-verification?id=${newUser?._id}'>verify</a> your email</p>`;
            await sendMail(email, 'Email Verification', message);

            res.cookie("token", access_token, {
                secure: true,
                sameSite: "none",
                maxAge: 7 * 24 * 60 * 60 * 1000,
                httpOnly: true
            });

            return res.status(201).json({
                success: true,
                message: "User register successfully!",
                user: userData
            })
        } catch (error) {
            await cloudinary.uploader.destroy(publicId);

            return res.status(500).json({
                success: false,
                message: "Failed to create user",
                error: error.message,
            });
        }


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const verifyUserController = async (req, res) => {
    console.log('hi there!');
    try {
        if (req.query.id === undefined) {
            return res.render('404');
        }
        const userData = await User.findOne({ _id: req.query.id });
        if (userData) {
            if (userData.is_verified) {
                return res.render('mail-verification', { message: "Your email already verified!" });
            }
            await User.findByIdAndUpdate({ _id: req.query.id }, { $set: { is_verified: true } });
            return res.render('mail-verification', { message: "Mail has been verified successfully!" });
        }
        else {
            return res.render('mail-verification', { message: "User not found!" });
        }
    } catch (error) {
        return res.render('404');
    }
}

// export const sendMailVerificationController = async (req, res) => {
//     try {
//         const { email } = req.body;
//         const ifUserExist = await User.findOne({ email });
//         if (ifUserExist) {
//             if (ifUserExist?.is_verified) {
//                 return res.status(400).json({ success: false, message: "Email is already verified" });
//             }
//             else {
//                 const message = `<p>Hii, ${ifUserExist?.name}, Please <a href='http://localhost:4000/mail-verification?id=${ifUserExist?._id}'>verify</a> your email</p>`;
//                 await sendMail(ifUserExist?.email, 'Email Verification', message);
//                 return res.status(300).json({ success: true, message: "Email sent" });
//             }
//         }
//         else {
//             return res.status(400).json({ success: false, message: "Email does not exists!" })
//         }
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

export const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body;
        const ifUserExist = await User.findOne({ email });
        if (!ifUserExist) {
            return res.status(400).json({ success: false, message: "Invalid Email!" });
        }
        const random_string = randomString.generate();
        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        // const message = `<p>Hii, ${ifUserExist?.name}, Please click <a href='http://localhost:8000/reset-password?token=${random_string}'>here </a> to reset the password, Link will expire within a minute.</p>`;
        const message = `<p>Hii, ${ifUserExist?.name}, Please enter OTP: ${otp} to reset the password, OTP will expire within a minute.</p>`;
        await ResetPassword.deleteMany({ user_id: ifUserExist?._id });
        const updatedPassword = new ResetPassword({
            user_id: ifUserExist?._id,
            // token: random_string
            token: otp
        });
        await updatedPassword.save();
        await sendMail(ifUserExist?.email, 'Reset Password', message);

        return res.status(201).json({ success: true, message: "Reset Password email sent to your email address" });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const resetPasswordController = async (req, res) => {
    try {

        const { token, email } = req.body;

        const ifUserExist = await User.findOne({ email });
        if (!ifUserExist) {
            return res.status(400).json({ success: false, status: 0, message: "Email does not exists!" });
        }

        const user_id = new mongoose.Types.ObjectId(ifUserExist?._id);
        const resetOTP = await ResetPassword.findOne({ token, user_id });

        if (!resetOTP) {
            return res.status(400).json({ success: false, status: 0, message: "Invalid OTP!" });
        }

        const sendNextOTP = await otpOneMinuteValidation(resetOTP.timestamp);

        if (sendNextOTP) {
            return res.status(400).json({ success: false, status: 0, message: "Invalid OTP!" });
        }
        await ResetPassword.updateOne(
            { _id: resetOTP._id },
            { $set: { isVerifiedToken: true } }
        );

        return res.status(200).json({ success: true, message: "OTP Verified Successfully!" });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const updateForgotPasswordController = async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body;

        const ifUserExist = await User.findOne({ email });
        if (!ifUserExist) {
            return res.status(400).json({ success: false, status: 0, message: "Invalid Email!" });
        }

        const user_id = new mongoose.Types.ObjectId(ifUserExist?._id);
        const resetOTP = await ResetPassword.findOne({ user_id, isVerifiedToken: true });

        if (!resetOTP) {
            return res.status(400).json({ success: false, status: 0, message: "Invalid OTP!" });
        }

        const sendNextOTP = await otpOneMinuteValidation(resetOTP.timestamp);
        if (sendNextOTP) {
            return res.status(400).json({ success: false, status: 0, message: "Invalid OTP!" });
        }

        if (newPassword !== confirmPassword) {
            return res.status(404).json({ success: false, status: 0, message: "Password does not match" });
        }

        let newHashedPassword = await bcrypt.hash(confirmPassword, 10);

        await User.findByIdAndUpdate({ _id: user_id }, {
            $set: {
                password: newHashedPassword
            }
        });
        await ResetPassword.deleteMany({ user_id });
        return res.status(200).json({ success: true, message: "Password updated successfully!" });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isUserExist = await User.findOne({ email });
        if (!isUserExist) {
            return res.status(400).json({ success: false, message: "Email and password are incorrect" });
        }

        let isPasswrodMatch = await bcrypt.compare(password, isUserExist?.password);
        if (!isPasswrodMatch) {
            return res.status(400).json({ success: false, message: "Email and password are incorrect" });
        }

        if (!isUserExist?.is_verified) {
            return res.status(400).json({ success: false, message: "Please verify your account!" });
        }
        const userObj = isUserExist.toObject();

        delete userObj.password;
        delete userObj.is_verified;
        delete userObj.image_public_id;
        delete userObj.provider;

        const access_token = await generateAccessToken({ user: userObj });
        const refresh_token = await generateRefreshToken({ user: userObj });

        res.cookie("token", access_token, {
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });
        return res.status(200).json({ success: true, message: "Login Successfully!", user:userObj, access_token, refresh_token, token_type: "Bearer" });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const userProfileController = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found!" });
        }
        return res.status(200).json({ success: true, message: "Fetched current user information!", user: user });
    } catch (error) {
        console.log(error, 'hi error');
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// export const userUpdateProfileController = async (req, res) => {
//     try {
//         const { name, mobile } = req.body;
//         let data = { name, mobile };

//         if (req.file) { // safer check
//             data.image = req.file.filename;

//             const oldUser = await User.findById(req.user._id);
//             if (oldUser && oldUser.image) {
//                 const oldFilePath = path.join(__dirname, `../public/images/${oldUser.image}`);
//                 await deleteImage(oldFilePath);
//             }
//         }

//         await User.findByIdAndUpdate({ _id: req.user._id }, { $set: data }, { new: true });

//         return res.status(200).json({ success: true, message: "User updated successfully!" });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

// export const refreshTokenController = async (req, res) => {
//     try {
//         const userId = req.user._id;
//         const user = await User.findOne({ _id: userId });
//         const access_token = await generateAccessToken({ user });
//         const refresh_token = await generateRefreshToken({ user });
//         return res.status(200).json({ success: true, message: "Token Refreshed!", access_token, refresh_token });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

export const logoutController = async (req, res) => {
    try {
        const token = (req.body && req.body.token) || req.query.token || req.headers['authorization'];

        let token_value = token.split(" ")[1];
        let black_listed_token = new BlackList({ token: token_value });
        await black_listed_token.save();
        res.setHeader('Clear-Site-Data', '"cookies", "storage"');
        res.clearCookie("token");
        return res.status(200).json({ success: true, message: "You are logged out!" })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// export const sendOTPVerificationController = async (req, res) => {
//     try {
//         const { email } = req.body;
//         const userData = await User.findOne({ email });
//         if (!userData) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email does not exists!"
//             });
//         }

//         if (userData.is_verified === true) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email is already verified!"
//             });
//         }

//         const oldOTP = await OTP.findOne({ user_id: new mongoose.Types.ObjectId(userData._id) });

//         if (oldOTP) {
//             const sendNextOTP = await otpOneMinuteValidation(oldOTP.timestamps);
//             if (!sendNextOTP) {
//                 return res.status(400).json({
//                     success: false,
//                     message: "Please try after a minute."
//                 });
//             }
//         }

//         const generated_otp = await generateRandomOTP();
//         const current_date = new Date();

//         await OTP.findOneAndUpdate(
//             { user_id: userData._id },
//             {
//                 otp: generated_otp,
//                 timestamps: new Date(current_date.getTime())
//             },
//             {
//                 upsert: true,
//                 new: true,
//                 setDefaultOnInsert: true
//             });

//         const message = `<p>Hii, ${userData?.name}, Please fill your otp to verify your email. ${generated_otp}</p>`;
//         await sendMail(userData?.email, 'Email Verification', message);

//         return res.status(200).json({ success: true, message: "OTP sent to your email successfully!" })
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

// export const otpVerificationController = async (req, res) => {
//     try {
//         const { user_id, otp } = req.body;

//         // Check, is user exist?
//         const userData = await User.findOne({ _id: user_id });
//         if (!userData) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User does not exists!"
//             });
//         }

//         // Check, is otp valid or not?
//         const otpData = await OTP.findOne({ user_id, otp });
//         if (!otpData) {
//             return res.status(400).json({
//                 success: false,
//                 message: "You entered wrong OTP!"
//             });
//         }


//         // Check, is account already verified or not
//         if (userData.is_verified === true) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Account is already verified!"
//             });
//         }

//         const generated_otp = await otpOneMinuteValidation(otpData?.timestamps);
//         if (generated_otp) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Your OTP has been expired!"
//             });
//         }

//         await User.findByIdAndUpdate(
//             { _id: user_id },
//             {
//                 $set: { is_verified: true },
//             });

//         return res.status(200).json({ success: true, message: "Account verified successfully!" })
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

// export const getAllOtherUsers = async (req, res) => {
//     try {
//         const user = req.user;
//         const users = await User.find({ _id: { $nin: [user?._id] } })
//         return res.status(200).json({success:true,  users });
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// }

export const googleAuth = async (req, res) => {
    try {
        const { name, email, is_verified, mobile, image, role } = req.body;
        let user = await User.findOne({ email });
        let isNewUser = false;
        if (!user) {
            user = await User.create({
                name, email, is_verified, mobile, image, role, provider: "google",
            });
            isNewUser = true;
        }
        else {
            let updated = false;
            if (!user.image && image) {
                user.image = image;
                updated = true;
            }
            if (updated) {
                await user.save();
            }
        }
        console.log(user, 'google user token');
        const access_token = await generateAccessToken({ user });
        const refresh_token = await generateRefreshToken({ user: user });

        res.cookie("token", access_token, {
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true
        });

        return res.status(isNewUser ? 201 : 200).json({
            success: true,
            message: isNewUser
                ? "User registered successfully!"
                : "Login successful!",
            isNewUser,
            user,
            access_token, refresh_token, token_type: "Bearer" 
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}