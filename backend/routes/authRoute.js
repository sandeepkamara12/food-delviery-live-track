import express from "express";
import {verifyUserController} from '../controllers/userController.js';
const authRouter = express.Router();

authRouter.get("/mail-verification", verifyUserController);

export default authRouter;