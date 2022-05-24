import './Item.css';
import { Link } from 'react-router-dom';

export default function Item (info) {
    return(
        <Link to={`/product/${info.info.id}`} className="card">
            <div>
                <img src={info.info.picture} alt={info.info.title} className="picture" />
            </div>
            <p>{info.info.title}</p>
            <p>$ {info.info.price}</p>
        </Link>
    );
}