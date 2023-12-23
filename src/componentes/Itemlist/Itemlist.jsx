import Item from "../Item/Item"
import "./ItemList.css"

const Itemlist = ({productos}) => {
  return (
    <div className="item-list"> 
        {
            productos.map((producto)=>(
                <Item producto={producto} key={producto.id} />
            ))
        } 
         
      </div>
  )
}
export default Itemlist