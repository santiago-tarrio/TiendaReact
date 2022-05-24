import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function ItemDetail (data) {
    const [toCart, setToCart] = useState(false)

    console.log(data)
    const onAdd = (quantity) => {
        setToCart(true);
    }
    return(
        <div className="detailContainer">
            <div className="imgContainer">
                <img src={data.product.picture} alt={data.product.title} className="imgDetail" />
            </div>
            <div className="dataContainer">
                <h2>{data.product.title}</h2>
                <p>$ {data.product.price}</p>
                {
                    toCart ? <Link to='/cart'>Finalizar la compra</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                }
                
            </div>
        </div>
    );
}