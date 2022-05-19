import Navbar from "../../components/Navbar/Navbar";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";

export default function Category () {
    const { categoryname } = useParams();
    console.log(categoryname)
    
    return (
        <div className="App">
            <Navbar />
            <h1>NBA {categoryname}</h1>
            <ItemListContainer categoryname={categoryname} />
        </div>
    );
}