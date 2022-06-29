import './Item.css';
import { Link } from 'react-router-dom';

export default function Item (info) {
    return(
        <Link to={`/product/${info.info.id}`} className="card">
            <div>
                <img src={info.info.picture} alt={info.info.title} className="picture" />
            </div>
            <div className="itemText">
            <p className="itemTitle">{info.info.title}</p>
            <p className="itemPrice">${info.info.price}</p>
            </div>
        </Link>
    );
}