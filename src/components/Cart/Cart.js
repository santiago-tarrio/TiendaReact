
import logoCart from './cart-icon.png'
import { CartContext } from '../CartContext/CartContext'
import React, { useEffect, useState } from "react";

export default function Cart(){
    const { cart } = React.useContext(CartContext);
    const [cartQuantity, setCartQuantity] = useState("0")
    
    console.log(cart)


    useEffect(() => {
        let q = 0
        cart.forEach(a => q += (1 * a.quantity))
        setCartQuantity(q)
    }, [cart])

    return(
    <div className="cartLogoContainer">
        <img src={logoCart} alt="icono carrito" className="cartIcon" />
        {(cartQuantity > 0) && <span className="cartText">{cartQuantity}</span>}
    </div>
)
}