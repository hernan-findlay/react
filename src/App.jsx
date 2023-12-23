import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import './App.css';
import ItemCount from "./componentes/ItemCount/ItemCount";

function App() {
  

  return (
  
    <div id="app">
    <NavBar/>
    <ItemListContainer saludo="De Mendoza para el mundo" />

   <ItemCount stock={10} /> 
    </div>
    
      
    
  )
}

export default App
