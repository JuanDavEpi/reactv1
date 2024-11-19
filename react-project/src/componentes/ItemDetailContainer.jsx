import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;


  useEffect(() => {
    
    const docRef= doc(db, "products", id);
    getDoc(docRef)
      .then((resp) => {
            setItem(
          {...resp.data(), id: resp.id }
        );
      })

  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>} {/* Mensaje de carga */}
    </div>
  );
}

export default ItemDetailContainer;
