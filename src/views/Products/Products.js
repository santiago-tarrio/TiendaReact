import Navbar from "../../components/Navbar/Navbar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

export default function Products () {

    return (
    <div className="App">
        <Navbar />
        <h1>Los mejores productos NBA</h1>
        <h2>Jerseys</h2>
        <ItemListContainer categoryname={"jerseys"}  />
        <h2>Hoodies</h2>
        <ItemListContainer categoryname={"hoodies"}  />
        <h2>Headwear</h2>
        <ItemListContainer categoryname={"headwear"}  />
    </div>
    );
}