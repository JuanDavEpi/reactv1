import { createContext, useEffect, useState } from "react";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([initialCart]);

    const addToCart = (item, amount) => {

        const addedItem = { ...item, amount };

        const newCart = [...cart];
        const inTheCart = newCart.find((product) => product.id === addedItem.id)

        if (inTheCart) {
            inTheCart.amount += amount;
        } else {
            newCart.push(addedItem)
        }
        setCart(newCart);
        console.log(newCart)
    }

    const amountInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.amount, 0)
    }

    const totalPrice = () => {
        if (cart.length === 0) return 0;
        return cart.reduce((acc, prod) => acc + prod.precio * prod.amount, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={ {
            cart,
            addToCart,
            amountInCart,
            totalPrice,
            emptyCart} }>
            {children}
        </CartContext.Provider>
    )
}