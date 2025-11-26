import express from "express";
import {
  getShopBycity,
  getShopController,
    shopController
} from "../controllers/shopController.js";
import {
  uploadSingleImage,
} from "../middlewares/uploadMiddleware.js";
import { validationMiddleware } from "../middlewares/validationMiddleware.js";
import {
  createEditShopValidator,
} from "../helpers/validations.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const shopRouter = express.Router();

shopRouter.use(express.json());

shopRouter.post("/create-update-shop", verifyToken, uploadSingleImage("image"), createEditShopValidator, validationMiddleware, shopController);
shopRouter.get("/get-shop", verifyToken, getShopController);
shopRouter.get("/get-shop-by-city", verifyToken, getShopBycity);
export default shopRouter;
