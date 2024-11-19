import ItemList from "./ItemList";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";



const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
        
      const productsRef = collection(db, "products");

      const q = categoria ? query(productsRef, where("categoria", "==", categoria)) : productsRef;

      getDocs(q)
        .then((resp) => {
          
          setProducts(

            resp.docs.map((doc) => {
              return {  ...doc.data(), id: doc.id}
            })
          )
        })
    }, [categoria]);
    

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={productos}/>
        </div>

    );
};

export default ItemListContainer