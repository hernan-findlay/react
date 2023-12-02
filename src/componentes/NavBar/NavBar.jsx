import CartWidget from "./CartWidget"
import "./NavBar.scss"
const NavBar = () => {

    return(
        <div id="navbar"> 
            <ul>
                <li>
                    <a href="">Vino Blanco</a>
                </li>
                <li>
                    <a href="">Vino Tinto</a>
                </li>
                <li>
                    <a href="">Vino Torrontes</a>
                </li>
            </ul>

           <div className="brand ">
            <h1>Bodega Katina</h1>
           </div>
            <CartWidget/>
        </div>
    )
}

export default NavBar