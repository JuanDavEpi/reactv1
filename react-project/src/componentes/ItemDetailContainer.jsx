import { useEffect, useState } from "react";
import { dataRequestId } from "../helpers/dataRequest";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    dataRequestId(itemId)
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.error("Error fetching item:", error); // Manejo de errores
      });
  }, [itemId]);

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>} {/* Mensaje de carga */}
    </div>
  );
}

export default ItemDetailContainer;
