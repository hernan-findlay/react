import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import './App.css';
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

function App() {
  

  return (
    <BrowserRouter>
    
      <NavBar/>


      <Routes>
      <Route path="/" element={<ItemListContainer saludo="De Mendoza para el mundo" />}/>
      <Route path="/categoria/:categoria" element={<ItemListContainer saludo="De Mendoza para el mundo"/>} />

      <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
