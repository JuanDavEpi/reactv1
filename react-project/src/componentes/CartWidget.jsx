import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const { amountInCart } = useContext(CartContext);

    return (
        <div>
            <Link to="/cart" >
            🛒
            <span> {amountInCart()}</span>
            </Link>
        </div>
    )
}

export default CartWidget