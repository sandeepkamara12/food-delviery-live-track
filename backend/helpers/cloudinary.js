import { configDotenv } from 'dotenv';
import fs from "fs";

configDotenv();
// backend/config/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


export const uploadOnCloudnary = async (file) => {
  try {
    uploadResult = await cloudinary.uploader.upload(file, { folder: "food-delivery" });
    fs.unlinkSync(file);
    return uploadResult.secure_url;
  } catch (error) {
    fs.unlinkSync(file);
    console.log(error);
  }
}


export default cloudinary;
