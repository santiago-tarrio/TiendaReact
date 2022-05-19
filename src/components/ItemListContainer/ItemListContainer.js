import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import axios from "axios"

export default function ItemListContainer (categoryname) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://apimocha.com/nbastore/products`).then((res) => {
            setData(res.data.filter(x => x.category === categoryname.categoryname))
        })
    }, [categoryname])
    
    return (
        <div>
            <ItemList prods={data} />
        </div>
    );
}

