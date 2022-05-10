import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer (props) {
    const onAdd = (quantity) => {
        console.log(`se agregaron ${quantity} al carrito`)
    }
    
    return (
        <div>
            <h2 style={{color: `${props.color}`}}>Este es un {props.greeting}</h2>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    );
}