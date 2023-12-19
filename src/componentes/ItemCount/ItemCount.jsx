
import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({stock}) => {
    const [ contador , setContador ] = useState(1)

    const sumar = ()=>{
        if(contador < 10){
            setContador(contador + 1)
        }
    } 
    
    const restar = ()=>{
       if(contador>1){
        setContador(contador - 1)
       }
    } 
  return (
    <div>
        <div>
            <button onClick={sumar}>+</button>
            <p>{contador}</p>
            <button onClick={restar}>-</button>
            <button>Terminar compra</button>
        </div>
    </div>
  )
}

/* function ItemCount ({stock,initial, onAdd}){
    
} */

export default ItemCount