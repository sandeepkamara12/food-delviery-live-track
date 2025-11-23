import express from "express";
import {
  loginUserController,
  logoutController,
  registerUserController,
  forgotPasswordController,
  resetPasswordController,
  updateForgotPasswordController,
  googleAuth,
  userProfileController,
  // refreshTokenController,
  // getAllOtherUsers,
  // otpVerificationController,
  // sendMailVerificationController,
  // sendOTPVerificationController,
  // userUpdateProfileController
} from "../controllers/userController.js";
import {
  uploadSingleImage,
  uploadSingleFile
  // uploadSingleFile,
} from "../middlewares/uploadMiddleware.js";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import {
  loginUserValidation,
  registerUserValidation,
  ResetPasswordVerification,
  // OTPVerificationValidator,
  // sendMailVerification,
  // updateUserProfileValidation
} from "../helpers/validations.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.use(express.json());

// userRouter.post("/send-verification-email", sendMailVerification, validationMiddleware, sendMailVerificationController);
// userRouter.post("/send-verification-otp", sendMailVerification, validationMiddleware, sendOTPVerificationController);
// userRouter.post("/verification-otp", OTPVerificationValidator, validationMiddleware, otpVerificationController);

userRouter.post("/register", uploadSingleImage("image"), registerUserValidation, validationMiddleware, registerUserController);
userRouter.post("/login", loginUserValidation, validationMiddleware, loginUserController);
userRouter.post("/profile", verifyToken, userProfileController);
userRouter.post("/forgot-password", ResetPasswordVerification, validationMiddleware, forgotPasswordController);
userRouter.post("/verify-otp", resetPasswordController);
userRouter.post("/reset-password", updateForgotPasswordController);
userRouter.post("/google-auth", googleAuth);
userRouter.get("/logout", verifyToken, logoutController);

// userRouter.get("/get-all-other-users", verifyToken, getAllOtherUsers);
// userRouter.post("/update-profile", verifyToken, uploadSingleImage('image'), updateUserProfileValidation, validationMiddleware,  userUpdateProfileController);

// userRouter.post("/upload", verifyToken, uploadSingleFile('image'), (req, res) => {
//   return res.status(200).json({ url: `http://localhost:4000/images/${req.file.filename}` });
// });

// userRouter.get("/refresh-token", verifyToken, refreshTokenController);

export default userRouter;
