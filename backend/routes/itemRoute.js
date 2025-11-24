import express from "express";
import {
    addItemController,
    editItemController,
    getShopItemsController
} from "../controllers/itemController.js";
import {
  uploadSingleImage,
} from "../middlewares/uploadMiddleware.js";
// import { validationMiddleware } from "../middlewares/validationMiddleware.js";
// import {
//   createEditShopValidator,
// } from "../helpers/validations.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const itemRouter = express.Router();

itemRouter.use(express.json());

itemRouter.post("/create-item", verifyToken, uploadSingleImage("image"), addItemController);
itemRouter.post("/get-shop-items", verifyToken, getShopItemsController);
itemRouter.post("/edit-item/:itemId", verifyToken, uploadSingleImage("image"), editItemController);
export default itemRouter;
