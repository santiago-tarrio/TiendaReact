import Cart from "../Cart/Cart";

export default function Navbar (){

    return (
            <nav className="header">
                <div className="containerLogo">
                    <p>img del logo</p>
                </div>
                <ul className="linkList">
                    <li>Inicio</li>
                    <li>Pagina1</li>
                    <li>Pagina2</li>
                    <li>
                    <Cart />
                    </li>
                </ul>
            </nav>
    );

}