import { createContext, useState } from "react";



const CartContext= createContext()

const CartProvider = ({children})=>{
    const [carrito, setCarrito] = useState([ ])

    return(
        <CartContext.Provider value={{carrito}}>
            {children}    
        </CartContext.Provider>

    )
}



export{
    CartProvider,CartContext
}