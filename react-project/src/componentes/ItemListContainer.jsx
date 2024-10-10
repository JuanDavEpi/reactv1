import { useEffect } from "react";
import { dataRequest  } from "../helpers/dataRequest";
import ItemList from "./ItemList";
import { useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
        dataRequest()
        .then((res) => {
            if (categoria) {
                setProducts(res.filter((prod) => prod.categoria.toLowerCase() === categoria.toLowerCase()));
            } else {
                setProducts(res);
            }
        });
    }, [categoria]);
    

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={productos}/>
        </div>

    );
};

export default ItemListContainer

