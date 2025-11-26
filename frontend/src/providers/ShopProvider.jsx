import { useState } from "react";
import axiosInstance from "../axiosInstance";
import { ShopContext } from "../context/ShopContext";
import { useCallback } from "react";
import { useMemo } from "react";

export const ShopProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [shop, setShop] = useState(null);
    const [items, setItems] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

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
            setItems(null);
            return error?.response?.data || { error: true };
        } finally {
            setLoading(false);
        }
    }, []);

    const createUpdateShop = useCallback(async (shopData) => {
        try {
            const response = await axiosInstance.post(
                `${import.meta.env.VITE_BA_URL}/api/shop/create-update-shop`,
                shopData
            );
            setShop(response?.data?.shop);
            return response?.data;
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    }, []);

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
    }, []);

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
    }, []);

    const getItemById = useCallback(async (itemId) => {
        if (!itemId) return;
        try {
            const result = await axiosInstance.get(
                `${import.meta.env.VITE_BA_URL}/api/item/get-item-by-id/${itemId}`
            );
            setCurrentItem(result?.data?.item);
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    }, []);

    const deleteItemById = useCallback(async (itemId) => {
        if (!itemId) return;
        try {
            const response = await axiosInstance.get(
                `${import.meta.env.VITE_BA_URL}/api/item/delete-item-by-id/${itemId}`
            );
            return response?.data;
        } catch (error) {
            return error?.response?.data || { error: true };
        }
    }, []);

    const fetchShopsByCity = useCallback(async (city) => {
        if (!city) return;
        try {
            let response = await axiosInstance.get(`${import.meta.env.VITE_BA_URL}/api/shop/get-shop-by-city/?city=${encodeURIComponent(city)}`)
            console.log("Shops by city response:", response);
            return response?.data;
        } catch (error) {
            return error?.response?.data || { error: true };
        }

    }, []);

    // ---- Provider value ----
    const value = useMemo(() => ({
        shop,
        items,
        loading,
        currentItem,
        createUpdateShop,
        createItem,
        updateItem,
        getItemById,
        deleteItemById,
        getShop,
        getShopItems,
        fetchShopsByCity
    }), [
        shop,
        items,
        loading,
        currentItem,
        createUpdateShop,
        createItem,
        updateItem,
        getItemById,
        deleteItemById,
        getShop,
        getShopItems,
        fetchShopsByCity
    ]);

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};