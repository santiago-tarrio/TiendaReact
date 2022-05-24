import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom"

export default function Navbar (){

    return (
            <nav className="header">
                <div className="containerLogo">
                    <p>img del logo</p>
                </div>
                <ul className="linkList">
                    <li>
                        <NavLink to="/">
                            Inicio
                        </NavLink>                    
                    </li>
                    <li>
                        <NavLink to="/products">
                            Productos
                        </NavLink>  
                    </li>
                    <li>
                        <NavLink to="/category/jerseys">
                            Jerseys
                        </NavLink>  
                    </li>
                    <li>
                        <NavLink to="/category/hoodies">
                            Hoodies
                        </NavLink>  
                    </li>
                    <li>
                    <Cart />
                    </li>
                </ul>
            </nav>
    );

}