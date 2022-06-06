import React, { useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext"
import './CartContainer.css';
import { NavLink } from "react-router-dom"

export default function CartContainer (){
    const { cart, removeItem, clearCart } = React.useContext(CartContext);
    const [total, setTotal] = useState([])
    const [cartCheck, setCartCheck] = useState(false)
    

    useEffect(() => {
        let sum = 0
        cart.forEach(a => sum += (a.price * a.quantity))
        setTotal(sum)
        if(cart.length > 0){
            setCartCheck(true)
        }
    }, [cart])

    return cartCheck ? (
        <div className="cartContainer">
            {cart.map (item =>
                <div className="cartItem">
                <img src={item.picture} alt={item.title} className="pictureCart" />
                <div className="cartItemText">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                </div>
                <div onClick={() => removeItem(item, item.quantity)}><span>X</span></div>
                </div>
            )}
            {(cart.length > 0) && <div onClick={() => clearCart()}><span>Borrar todo</span></div>}
            {(cart.length > 0) ? <p>Total: ${total} </p> : <NavLink to="/">Vaciaste el carrito. Seguí con tu compra</NavLink>}
        </div>   
    ) : (
        <div>
            <p>El Carrito esta vacio</p>
            <NavLink to="/">
                Seguí con tu compra
            </NavLink>
        </div>
    );
}