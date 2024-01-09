import { useEffect, useState } from "react"
import {} from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import db from "../../db/db"
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams()

  useEffect(()=>{


    const productosRef = coleccion()
    obtenerProductos
      .then((respuesta)=> {
        const productoEncontrado = respuesta.find( (prod)=> prod.id === id)
        setProducto(productoEncontrado)
      })
      .catch((err)=>{
        console.log(err)
      })

  }, [])

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}
export default ItemDetailContainer