import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./NavBar.scss"
const NavBar = () => {

    return(
        <div id="navbar"> 
            <ul>
                <li>
                    <Link to="/categoria/blanco">Vino Blanco</Link>
                </li>
                <li>
                    <Link to="/categoria/tinto">Vino Tinto</Link>
                </li>
                <li>
                    <Link to="/categoria/rosa">Vino Rosa</Link>
                </li>
            </ul>

           <Link to="/" className="brand ">
            <h1>Bodega Katina</h1>
           </Link>
            <CartWidget/>
        </div>
    )
}

export default NavBar