import React, { useState, useEffect} from "react"
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail"



export default function ItemDetailContainer (id) {
  const [product, setProduct] = useState([])
  console.log(id.id)
  useEffect(() => {
    axios.get('https://apimocha.com/nbastore/products').then((res) => {
    setProduct(res.data.find(element => element.id === id.id))  
    })
  }, [id])

  
  return (
    <ItemDetail product={product} />
  );
} 
