import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <p className="titulo"> {producto.nombre} </p>
      <p className="precio">$ {producto.precio} </p>
      <a href="" className="link">Ver detalles</a>
    </div>
  );
};
export default Item;