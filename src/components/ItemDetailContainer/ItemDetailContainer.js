import React, { useState, useEffect} from "react"
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getFirestore, getDoc, doc} from "firebase/firestore";



export default function ItemDetailContainer (id) {
  const [product, setProduct] = useState([])
  console.log(id.id)

  useEffect(() => {
    const db = getFirestore()
    const itemRef = doc(db, "productos", id.id)
    getDoc(itemRef).then(snapshot => {
      setProduct({ id: snapshot.id, ...snapshot.data() })
      console.log({ id: snapshot.id, ...snapshot.data() });
    })}, [id])
  
  return (
    <ItemDetail product={product} />
  );
} 
