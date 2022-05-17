import React, { useState, useEffect} from "react"
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail"


export default function ItemDetailContainer () {
  const [product, setProduct] = useState([])

  const getItem = () => {
    axios.get('https://apimocha.com/nbastore/jerseys').then((res) => {
     setProduct(res.data[2])
    })
  } 

  useEffect(() => {
    getItem();
  }, [])

  
  return (
    <ItemDetail product={product} />
  );
} 
