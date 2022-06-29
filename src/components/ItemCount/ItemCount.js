import React, { useEffect, useState } from "react";
import './ItemCount.css'


export default function ItemCount ({initial, stock, onAdd}){
    const [count, setCount] = useState(parseInt(initial))
    
    const handleAdd = () => {
        if (count >= 0 && count < stock)
            setCount(count + 1)
    }
    const handleRest = () => {
        if (count > 1)
            setCount(count - 1)
    }
    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])
    
    return(
        <div>
            <div className="counterContainer">
                <input type="button" value="+" onClick={handleAdd} />
                <div>
                    <span>{count}</span>
                </div>
                <input type="button" value="-" onClick={handleRest} />
            </div>
            <div>
                <button className="addCart" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}