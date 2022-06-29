import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"

export default function ItemDetail (data) {
    const { addItem } = React.useContext(CartContext);
    const [toCart, setToCart] = useState(false)
    const [quantity, setQuantity] = useState([])

    console.log(data)
    const onAdd = (total) => {
        setToCart(true);
        setQuantity(total)
    }

    useEffect(() => {
        if(quantity > 0){
        addItem(data.product, quantity);
        console.log(quantity)
        }
    }, [quantity])

    return(
        <div className="detailContainer">
            <div className="imgContainer">
                <img src={data.product.picture} alt={data.product.title} className="imgDetail" />
            </div>
            <div className="dataContainer">
                <h2 className="h2">{data.product.title}</h2>
                <p>$ {data.product.price}</p>
                {
                    toCart ? <Link to='/cart' className="toCart">Finalizar la compra</Link> : <ItemCount initial={1} stock={data.product.stock} onAdd={onAdd}/>
                }
                
            </div>
        </div>
    );
}