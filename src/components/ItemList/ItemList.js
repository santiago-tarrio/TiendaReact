
import Item from '../Item/Item'

export default function ItemList ({prods = []}) {

    return (
        <div className="cardContainer">
        {prods.map (product => <Item key={product.id} info={product} />)}
        </div>
    );
}