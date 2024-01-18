import { useContext } from "react";
import { SiVivino } from "react-icons/si";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext);

  return (
    <Link to="/carrito" id="cartwidget">
         <SiVivino />
      {carrito.length !== 0 && <p>{totalCantidad()}</p>}
    </Link>
  );
};

export default CartWidget;

