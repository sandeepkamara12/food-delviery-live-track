import Shop from "../models/shopModel.js";
import cloudinary from "../helpers/cloudinary.js";

export const shopController = async (req, res) => {
    try {
        const {name, city, state, address, owner} = req.body;
        let image;
        if(req.file) {
            const uploaded = await cloudinary.uploader.upload(req.file.path, { folder: "food-delivery/shop" });
            image = uploaded.secure_url;
        }
        let shop = await Shop.findOne({owner:owner});
        if(!shop) {
            shop = await Shop.create({
                name, city, state, address, image, owner
            });
        }
        else {
            shop = await Shop.findByIdAndUpdate(shop._id,{
                name, city, state, address, image: image || shop.image, owner
            }, {new:true});
        }
        await shop.populate("owner items");
        return res.status(200).json({
            success:true, message:"Shop created", shop
        })
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
export const getShopController = async (req, res) => {
    try {
        const shop = await Shop.findOne({owner:req.user?._id}).populate("owner items");
        if(!shop) {
            return res.status(400).json({
                success:false, message:"Shop not found!"
            });    
        }
        return res.status(200).json({
            success:true, message:"Shop Found!", shop
        })
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}