import './Item.css';

export default function Item (info) {
    return(
        <div className="card">
            <div>
                <img src={info.info.picture} alt={info.info.title} className="picture" />
            </div>
            <p>{info.info.title}</p>
            <p>$ {info.info.price}</p>
        </div>
    );
}