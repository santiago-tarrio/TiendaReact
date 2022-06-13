import React, { useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext"
import './CartContainer.css';
import { NavLink } from "react-router-dom"
import { doc, addDoc, runTransaction, collection, getFirestore, } from "firebase/firestore"

export default function CartContainer (){
    const { cart, removeItem, clearCart } = React.useContext(CartContext);
    const [total, setTotal] = useState([])
    const [data, setData] = useState()
    const [orderId, setOrderId] = React.useState()
    const [cartCheck, setCartCheck] = useState(false)
    

    useEffect(() => {
        let sum = 0
        cart.forEach(a => sum += (a.price * a.quantity))
        setTotal(sum)
        if(cart.length > 0){
            setCartCheck(true)
        }
    }, [cart])

    console.log(orderId)

     
      // Guardamos los datos del formulario en un estado cada vez que se modifica un campo
      const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
      }
    
      // Accion que se ejecuta al hacer click en el boton para enviar el formulario
      const handleSubmit = async (event) => {
        event.preventDefault();
        const order = {
          buyer: data,
          items: cart,
          total: total,
        };
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        await addDoc(ordersCollection, order).then(({id}) => {
          setOrderId(id)
          updateProducts()
        })
      }

      const updateProducts = async () => {
        const db = getFirestore ()
        cart.forEach( async (item) => {
          const productRef = doc(db, `productos`, item.id)
          await runTransaction(db, async (transaction) => {
          const transfDoc = await transaction.get(productRef);
          if (!transfDoc.exists()) {
            console.error("El documento no existe")
          }
          const newStock = transfDoc.data().stock - item.quantity;
          transaction.update(productRef, { stock: newStock });
        });
        })
      }
    


    return cartCheck ? (
        <div>
        {(orderId !== undefined) ? <span>Tu código de compra es: {orderId}</span>:

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

                <form onSubmit={handleSubmit}>
                            <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            />
                            <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            />
                            <input
                            type="phone"
                            name="phone"
                            placeholder="Phone"
                            onChange={handleChange}
                            />
                            <input
                            type="submit"
                            value="Finalizar compra"
                            />
                        </form>
            </div>
        }
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