import './Item.css';
import React, { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function Item (info) {
    const [data, setData] = useState([]);
    const onAdd = (quantity) => {
        console.log(`se agregaron ${quantity} al carrito`)
    }
    
    return(
        <div className="card">
            <div>
                <img src={info.info.picture} alt={info.info.title} className="picture" />
            </div>
            <p>{info.info.title}</p>
            <p>{info.info.price}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    );
}