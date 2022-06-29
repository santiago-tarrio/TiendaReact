import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom"
import logo from './logoNba.png'

export default function Navbar (){

    return (
            <nav className="header">
                <div className="containerLogo">
                    <img src={logo} alt="logo nba" />
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
                    
                    <NavLink to="/cart">
                        <Cart />
                    </NavLink>
                    </li>
                </ul>
            </nav>
    );

}