import { useEffect, useState } from 'react';
import data from '../data/products.json';

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve) => {
            resolve(data);
        });
    };

    useEffect(() => {
        pedirProductos().then((res) => {
            setProducts(res);
        });
    }, []);

    return (
        <div>
            {
                products.length > 0 && 
                <div>
                        <h2>{products[0].product_name}</h2>
                        <p>{products[0].product_description}</p>
                </div>
                
            }
        </div>
    );
};

export default ItemList;
