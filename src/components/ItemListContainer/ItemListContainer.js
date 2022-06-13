import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {getFirestore, getDocs, collection, query, where} from "firebase/firestore";

export default function ItemListContainer (categoryname) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore()
        const q = query(
            collection(db, "productos"),
            where("category", "==", categoryname.categoryname )
        )
        getDocs(q).then(snapshot => {
            if(snapshot.size === 0){
                console.log("No hay resultados")
            }
            const prods = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            setData(prods)
        })
    }, [categoryname])

    return (
        <div>
            <ItemList prods={data} />
        </div>
    );
}

