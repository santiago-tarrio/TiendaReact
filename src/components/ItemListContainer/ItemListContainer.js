import React from "react";

export default function ItemListContainer (props) {
    return (
        <div>
            <h2 style={{color: `${props.color}`}}>Este es un {props.greeting}</h2>
        </div>
    );
}