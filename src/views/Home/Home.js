import Navbar from "../../components/Navbar/Navbar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

export default function Home () {
    return (
        <div className="App">
            <Navbar />
            <h1>NBA Store</h1>
            <h2>Jerseys</h2>
            <ItemListContainer categoryname={"jerseys"}  />
            <h2>Hoodies</h2>
            <ItemListContainer categoryname={"hoodies"}  />
        </div>
    );
}