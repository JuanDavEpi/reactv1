import React, { useCallback, useContext, useState } from 'react';
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {

    const { cart, addToCart} =useContext(CartContext)

    const [amount, setAmount] = useState(1);

    const handleRest = () => {
        amount > 1 && setAmount(amount - 1);
    }

    const handlePlus = () => {
        amount < item.stock && setAmount(amount + 1);
    }

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Category: {item.categoria}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCount
                     amount={amount}
                        handlePlus={handlePlus}
                        handleRest={handleRest}
                        handleAdd={() => {addToCart(item, amount) }} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
