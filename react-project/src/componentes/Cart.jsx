import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, totalPrice, emptyCart } = useContext(CartContext);

    const handleEmpty = () => {
        emptyCart();
    }

    return (
        <div className='container'>
            <h1 className='title'>Your Cart</h1>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h2>{prod.titulo}</h2>
                        <p>${prod.precio}</p>
                        <p>Price per Unit : ${prod.precio}</p>
                        <p>Total Price : ${prod.precio * prod.amount}</p>
                        <p>Amount : {prod.amount}</p>

                    </div>
                ))
            }

{
    cart.length > 0 ? (
        <>
            <h2> Total Price: ${totalPrice().toFixed(2)} </h2>
            <button onClick={handleEmpty}>Empty Cart</button>
        </>
    ) : 
        <h2>Your cart is now empty</h2>
    
}


        </div>
    )
}

export default Cart
