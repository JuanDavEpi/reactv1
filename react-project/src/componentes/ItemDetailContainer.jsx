import { useEffect, useState } from "react";
import { dataRequestId } from "../helpers/dataRequest";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;


  useEffect(() => {
    dataRequestId(Number(id))
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.error("Error fetching item:", error); // Manejo de errores
      });
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>} {/* Mensaje de carga */}
    </div>
  );
}

export default ItemDetailContainer;
