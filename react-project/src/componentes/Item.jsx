import React from 'react'
import { Link } from 'react-router-dom'


const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo} className={producto.id === 3  ? 'producto-imagen imagen-ajustada' : 'producto-imagen'} />
        <div>
            <h4>{producto.titulo}</h4>
            <p>Price : ${producto.precio}</p>
            <p>Category : {(producto.categoria)}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>See more</Link>
        </div>
    </div>
  )
}

export default Item