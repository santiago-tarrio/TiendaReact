import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";


const jerseys = [
    {
        id: 1,
        title: "Jersey Los Angeles Lakers",
        price: 25000,
        picture: "https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-edition-swingman-jersey-gold-lebron-james-mens_ss4_p-11974962+u-1h60twwngxd63do74iay+v-e316cfa858774cef89a957b5cad74e22.jpg?_hv=1&w=900"   
    },
    {
        id: 2,
        title: "Jersey Phoenix Suns",
        price: 25000,
        picture: "https://images.footballfanatics.com/phoenix-suns/phoenix-suns-nike-icon-swingman-jersey-devin-booker-mens_ss4_p-11903570+u-bg9lscbff18f8l57sxph+v-de46abe4724d4d3098bd3a98d4a6f5e4.jpg?_hv=1&w=900"   
    },
    {
        id: 3,
        title: "Jersey Miami Heat",
        price: 25000,
        picture: "https://images.footballfanatics.com/miami-heat/miami-heat-nike-75th-anniversary-edition-swingman-jersey-black-jimmy-butler-mens_ss4_p-12096601+u-1hxojvd4yjrrw6muhkxb+v-ff8f783c96fe4ceea4e0ad4f68aae531.jpg?_hv=1&w=900"   
    },
    {
        id: 4,
        title: "Jersey Denver Nuggets",
        price: 25000,
        picture: "https://images.footballfanatics.com/denver-nuggets/denver-nuggets-nike-city-edition-swingman-jersey-custom-mens_ss4_p-12062454+u-9ugtp2prwf9dmbnsllnu+v-90a16efb0d5742f883730067580e89bd.jpg?_hv=1&w=900"   
    },
]

export default function ItemListContainer (props) {
    const [data, setData] = useState([]);


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(jerseys);
            }, 2000)
        });
        getData.then(res => setData(res));
    }, [])
    
    console.log(data)
    return (
        <div>
            <h2 style={{color: `${props.color}`}}>Este es un {props.greeting}</h2>
            <ItemList prods={data} />
        </div>
    );
}