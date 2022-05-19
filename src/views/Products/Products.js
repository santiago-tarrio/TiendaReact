import Navbar from "../../components/Navbar/Navbar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

export default function Products () {

    return (
    <div className="App">
        <Navbar />
        <h1>Los mejores productos NBA</h1>
        <ItemListContainer categoryname={"jerseys"}  />
        <ItemListContainer categoryname={"hoodies"}  />
    </div>
    );
}