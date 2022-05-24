import logoCart from './cart-icon.png'

export default function Cart(){
return(
    <div className="cartContainer">
        <img src={logoCart} alt="icono carrito" className="cartIcon" />
        <span className="cartText">0</span>
    </div>
)
}