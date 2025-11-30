import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { useCallback } from "react";
import { useMemo } from "react";

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState([]);

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

    const updateQuantity = useCallback((id, amount) => {
        setCarts(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(0, Math.min(10, item.quantity + amount)) }
                    : item
            )
        );
    }, []);

    // ---- Provider value ----
    const value = useMemo(() => ({
        carts,
        addToCart,
        updateQuantity
    }), [
        carts,
        addToCart,
        updateQuantity
    ]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};