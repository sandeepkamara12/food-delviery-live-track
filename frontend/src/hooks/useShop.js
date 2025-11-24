import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { useAuth } from "./useAuth";

const useShop = () => {
    const [loading, setLoading] = useState(false);
    const [shop, setShop] = useState(null);
    const [items, setItems] = useState("");
    const { user } = useAuth();

    const getShop = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`${import.meta.env.VITE_BA_URL}/api/shop/get-shop`);
            setShop(response?.data.shop);
            return response.data;
        } catch (error) {
            setShop(null);
            return error?.response?.data || { error: true };
        }
        finally {
            setLoading(false);
        }
    };

    const getShopItems = async (shopId) => {
        setLoading(true);
        try {
            const response = await axiosInstance.post(`${import.meta.env.VITE_BA_URL}/api/item/get-shop-items`, { shopId });
            console.log(response, 'get items');
            setItems(response?.data.items);
            return response.data;
        } catch (error) {
            setItems("");
            return error?.response?.data || { error: true };
        }
        finally {
            setLoading(false);
        }
    };

    const createShop = async (shopData) => {
        try {
            const response = await axiosInstance.post(`${import.meta.env.VITE_BA_URL}/api/shop/create-shop`, shopData);
            return response?.data;
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    }

    const createItem = async (itemData) => {
        try {
            for (let [key, value] of itemData.entries()) {
                console.log(key, value);
            }
            const response = await axiosInstance.post(`${import.meta.env.VITE_BA_URL}/api/item/create-item`, itemData);
            return response?.data;
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    }

    useEffect(() => {
        if (shop?._id) {
            getShopItems(shop?._id);
        }
    }, [shop?._id])

    useEffect(() => {
        if (user?._id) {
            getShop();
        }
    }, [user?._id])

    return { shop, items, loading, createShop, createItem }

}
export default useShop;