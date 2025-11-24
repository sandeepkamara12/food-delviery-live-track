import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { useAuth } from "../hooks/useAuth";
import { ShopContext } from "../context/ShopContext";
import { useCallback } from "react";
import { useMemo } from "react";

export const ShopProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [shop, setShop] = useState(null);
    const [items, setItems] = useState("");
    const [currentItem, setCurrentItem] = useState(null);

    const { user } = useAuth();

    // ---- API Functions ----
    const getShop = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(
                `${import.meta.env.VITE_BA_URL}/api/shop/get-shop`
            );
            setShop(response?.data?.shop);
            return response.data;
        } catch (error) {
            setShop(null);
            return error?.response?.data || { error: true };
        } finally {
            setLoading(false);
        }
    }, []);

    const getShopItems = useCallback(async (shopId) => {
        setLoading(true);
        try {
            const response = await axiosInstance.post(
                `${import.meta.env.VITE_BA_URL}/api/item/get-shop-items`,
                { shopId }
            );
            setItems(response?.data?.items);
            return response.data;
        } catch (error) {
            setItems("");
            return error?.response?.data || { error: true };
        } finally {
            setLoading(false);
        }
    },[]);

    const createShop = useCallback(async (shopData) => {
        try {
            const response = await axiosInstance.post(
                `${import.meta.env.VITE_BA_URL}/api/shop/create-shop`,
                shopData
            );
            return response?.data;
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    },[]);

    const createItem = useCallback(async (itemData) => {
        try {
            const response = await axiosInstance.post(
                `${import.meta.env.VITE_BA_URL}/api/item/create-item`,
                itemData
            );
            return response?.data;
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    },[]);

    const updateItem = useCallback(async (itemId, formData) => {
        try {
            const response = await axiosInstance.post(
                `${import.meta.env.VITE_BA_URL}/api/item/edit-item/${itemId}`,
                formData
            );
            return response?.data;
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    },[]);

    const getItemById = useCallback(async (itemId) => {
        try {
            const result = await axiosInstance.get(
                `${import.meta.env.VITE_BA_URL}/api/item/get-item-by-id/${itemId}`
            );
            setCurrentItem(result?.data?.item);
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    },[]);

    const deleteItemById = useCallback(async (itemId) => {
        try {
            const result = await axiosInstance.get(
                `${import.meta.env.VITE_BA_URL}/api/item/delete-item-by-id/${itemId}`
            );

            if (result?.data?.success) {
                // Optional refresh
                // getShop();
            }
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    },[]);

    // ---- Effects ----

    useEffect(() => {
        if (shop?._id) {
            getShopItems(shop._id);
        }
    }, [shop?._id]);

    useEffect(() => {
        if (user?._id) {
            getShop();
        }
    }, [user?._id]);


    // ---- Provider value ----
    const value = useMemo(() => ({
        shop,
        items,
        loading,
        currentItem,
        createShop,
        createItem,
        updateItem,
        getItemById,
        deleteItemById,
        getShop,
        getShopItems
    }), [
        shop,
        items,
        loading,
        currentItem,
        createShop,
        createItem,
        updateItem,
        getItemById,
        deleteItemById,
        getShop,
        getShopItems
    ]);

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};