import { useEffect, useState } from "react";

import obtenerProductos from "../Utilidades/data";
import Itemlist from "../ItemList/Itemlist";
import { useParams } from "react-router-dom";
import { RiseLoader } from "react-spinners";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { categoria } = useParams();

  useEffect(() => {
    setCargando(true)
    obtenerProductos
      .then((respuesta) => {
        if (categoria) {
          const productosFiltrados = respuesta.filter(
            (producto) => producto.categoria === categoria
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [categoria]);

  return (
    <>
      {cargando ? (
        <div className="cargando">         
        <RiseLoader
        color="#5a0b76"
        margin={5}
        size={30}
        />
        </div>
      ) : (
        <div className="item-list-container">
          <p className="saludo">{saludo}</p>
          <Itemlist productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;