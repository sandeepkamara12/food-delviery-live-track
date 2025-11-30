import { useState } from "react";
import axiosInstance from "../axiosInstance";
import { CartContext } from "../context/CartContext";
import { useCallback } from "react";
import { useMemo } from "react";

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);
    const [count, setCount] = useState(0);

    const handleCountPlus = useCallback(() => {
        setCount(prev => prev < 10 ? prev + 1 : 10)
    }, [count]);
    const handleCountMinus = useCallback(() => {
        setCount(prev => prev > 0 ? prev - 1 : 0)
    }, [count]);
    const handleResetProductQuantity = useCallback(() => {
        setCount(0);
    });

    const addToCart = useCallback((item) => {
        setCarts(prevCart => {
            const exist = prevCart.find(cart => cart?.id == item?.id);
            if (exist) {
                return prevCart.map(cart =>
                    cart.id === item.id
                        ? { ...cart, quantity: cart.quantity + item.quantity }
                        : cart
                );
            }
            return [...prevCart, item];
        })
    }, [])
   
    // ---- Provider value ----
    const value = useMemo(() => ({
        carts,
        addToCart,
        handleCountPlus,
        handleCountMinus,
        handleResetProductQuantity
    }), [
        carts,
        addToCart,
        handleCountPlus,
        handleCountMinus,
        handleResetProductQuantity
    ]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};