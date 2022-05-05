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
                        <div className="cartContainer">
                            <img src="assets/cart-icon.png" alt="icono carrito" className="cartIcon" />
                            <span className="cartText">0</span>
                        </div>
                    </li>
                </ul>
            </nav>
    );

}