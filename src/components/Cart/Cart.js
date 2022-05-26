import logoCart from './cart-icon.png'
import { CartContext } from '../CartContext/CartContext'
import React from 'react'

export default function Cart(){
    const { cart } = React.useContext(CartContext);
    return(
    <div className="cartContainer">
        <img src={logoCart} alt="icono carrito" className="cartIcon" />
        <span className="cartText">{cart.length}</span>
    </div>
)
}