import Navbar from "../../components/Navbar/Navbar";
import CartContainer from "../../components/CartContainer/CartContainer"

export default function Cart () {
    return (
        <div className="App">
            <Navbar />
            <h1>Carrito de compra</h1>
            <CartContainer />
        </div>
    );
}