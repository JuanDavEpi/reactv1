import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div>
      <h2>Productos</h2>
      <div className="products">
        {products.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
