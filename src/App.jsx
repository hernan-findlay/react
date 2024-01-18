import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";



function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar/>


      <Routes>
      <Route path="/" element={<ItemListContainer saludo="De Mendoza para el mundo" />}/>
      <Route path="/categoria/:categoria" element={<ItemListContainer saludo="De Mendoza para el mundo"/>} />

      <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="*" element={<Error />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
      
    
  );
}

export default App;
