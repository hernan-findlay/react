import { useState } from "react"
import "./Itemcount.css"


const Itemcount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const sumar = ()=> {
        if(contador < 10)
        setContador(contador + 1)
    }
    
    const restar = ()=> {
        if (contador > 1){
             setContador(contador - 1)
        }
       
    }

  return (
    <div>
        <button onClick={sumar}>+</button>
        <p>{contador}</p>
        <button onClick={restar}>-</button>
        <button>Terminar compra</button>
        
    </div>
  )
}
export default Itemcount