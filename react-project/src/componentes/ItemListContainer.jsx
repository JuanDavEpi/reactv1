import { useEffect } from "react";
import { dataRequest  } from "../helpers/dataRequest";
import ItemList from "./ItemList";
import { useState } from "react";


const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState([]);
    console.log(productos);

    useEffect(() => {
        dataRequest()
        .then((res) =>{
            setProducts(res);
        })
    }, [])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={productos}/>
        </div>

    );
};

export default ItemListContainer

