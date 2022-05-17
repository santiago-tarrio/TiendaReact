import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

export default function ItemDetail (data) {
    console.log(data)
    const onAdd = (quantity) => {
        console.log(`se agregaron ${quantity} al carrito`)
    }
    return(
        <div className="detailContainer">
            <div className="imgContainer">
                <img src={data.product.picture} alt={data.product.title} className="imgDetail" />
            </div>
            <div className="dataContainer">
                <h2>{data.product.title}</h2>
                <p>Camiseta titular de Jummy Butler</p>
                <p>$ {data.product.price}</p>
                <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            </div>
        </div>
    );
}