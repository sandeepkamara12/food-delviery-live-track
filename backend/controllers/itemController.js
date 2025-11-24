import Item from "../models/itemModel.js";
import Shop from "../models/shopModel.js";
import cloudinary from "../helpers/cloudinary.js";

export const addItemController = async (req, res) => {
    try {
        const {name, category, food_type, price} = req.body;
        let image;
        if(req.file) {
            const uploaded = await cloudinary.uploader.upload(req.file.path, { folder: "food-delivery" });
            image = uploaded.secure_url;
        }
        let shop = await Shop.findOne({owner:req.user?._id});
        if(!shop) {
            return res.status(400).json({
                success:false, message:"Shop not found"
            });
        }
        // let item = await Item.findOne({owner:req.userId});
        // if(!item) {
        let item = await Item.create({
            name, category, food_type, price, image, shop:shop?._id
        });
        shop.items.push(item?._id)
        await shop.save();
        // }
        await shop.populate("items owner");
        return res.status(200).json({
            success:true, message:"Item created", shop
        })
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
export const editItemController = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const {name, category, food_type, price} = req.body;
        let item = await Item.findOne({_id:itemId});
        if(!item) {
            return res.status(400).json({
                success:false, message:"Item not found"
            });
        }
        let image = item.image; 
        
        if(req.file) {
            const upload = await cloudinary.uploader.upload(req.file.path, { folder: "food-delivery/shop/items" });
            image = upload.secure_url;
        }
        item = await Item.findByIdAndUpdate(itemId,{
                name, category, food_type, price, image
            }, {new:true});

            let shop = await Shop.findOne({owner:req.user?._id});
        if(!shop) {
            return res.status(400).json({
                success:false, message:"Shop not found"
            });
        }
        await shop.populate("items owner");
        return res.status(200).json({
            success:true, message:"Item updated", shop
        })
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getShopItemsController = async (req, res) => {
    try {
        const {shopId} = req.body;
        let items = await Item.findOne({shop:shopId});
        if(!items) {
            return res.status(400).json({
                success:false, message:"Items not found!"
            });
        }
        return res.status(200).json({
            success:true, message:"Item created", items
        })
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getItemByIdController = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        let item = await Item.findOne({_id:itemId});
        if(!item) {
            return res.status(400).json({
                success:false, message:"Item not found"
            });
        }
        return res.status(200).json({
            success:true, message:"Item Found!", item
        })
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
export const deleteItemController = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        let item = await Item.findByIdAndDelete({_id:itemId});
        
        if(!item) {
            return res.status(400).json({
                success:false, message:"Item not found"
            });
        }

        let shop = await Shop.findOne({owner:req.user?._id});
        if(!shop) {
            return res.status(400).json({
                success:false, message:"Shop not found"
            });
        }

        shop.items = shop.items.filter(i=>i!==item?._id);
        await shop.save();
        return res.status(200).json({
            success:true, message:"Item Deleted!", shop
        })
    } catch (error) {
         return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}