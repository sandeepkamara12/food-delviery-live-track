import Shop from "../models/shopModel.js";
import cloudinary from "../helpers/cloudinary.js";

export const shopController = async (req, res) => {
    try {
        const { name, city, state, address, owner } = req.body;

        let image;
        if (req.file) {
            const uploaded = await cloudinary.uploader.upload(req.file.path, {
                folder: "food-delivery/shop",
            });
            image = uploaded.secure_url;
        }

        let shop = await Shop.findOne({ owner: owner });

        if (!shop) {
            shop = await Shop.create({
                name,
                city,
                state,
                address,
                image,
                owner,
            });
            await shop.populate({
                path: "owner",
                select: "name email mobile image role _id",
            });
            // await shop.populate({
            //     path: "items",
            //     options: { sort: { updatedAt: -1 } }
            // });
            return res.status(200).json({
                success: true,
                message: `Shop created`,
                shop,
            });
        } else {
            shop = await Shop.findByIdAndUpdate(
                shop._id,
                {
                    name,
                    city,
                    state,
                    address,
                    image: image || shop.image,
                    owner,
                },
                { new: true }
            );
            await shop.populate({
                path: "owner",
                select: "name email mobile image role _id",
            });
            // await shop.populate({
            //     path: "items",
            //     options: { sort: { updatedAt: -1 } }
            // });
            return res.status(200).json({
                success: true,
                message: `Shop updated`,
                shop,
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const getShopController = async (req, res) => {
    try {
        const shop = await Shop.findOne({ owner: req.user?._id }).populate("owner");
        // await shop.populate({
        //     path: "items",
        //     options: { sort: { updatedAt: -1 } }
        // });
        if (!shop) {
            return res.status(400).json({
                success: false,
                message: "Shop not found!",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Shop Found!",
            shop,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const getShopBycity = async (req, res) => {
    try {
        const { city } = req.query;
        const escapeRegex = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        const safeCity = escapeRegex(city);

        const shops = await Shop.find({
            city: { $regex: new RegExp(`^${safeCity}$`, "i") },
        }).populate("owner");
        if (!shops) {
            return res.status(404).json({
                success: false,
                message: "No shops found in this city",
            });
        }
        return res.status(200).json({
            success: true,
            message: `Shops in ${city} found`,
            shops,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
