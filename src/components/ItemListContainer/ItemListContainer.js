import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import axios from "axios"
import {getFirestore, getDocs, collection} from "firebase/firestore";

export default function ItemListContainer (categoryname) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore()
        const productsRef = collection(db, "productos")
        getDocs(productsRef).then(snapshot => {
            if(snapshot.size === 0){
                console.log("No hay resultados")
            }
            const prods = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setData(prods.filter(x => x.category === categoryname.categoryname))
        })
    }, [categoryname])

    /*axios.get(`https://apimocha.com/nbastore/products`).then((res) => {
            setData(res.data.filter(x => x.category === categoryname.categoryname))
        })

    */
    
    return (
        <div>
            <ItemList prods={data} />
        </div>
    );
}

