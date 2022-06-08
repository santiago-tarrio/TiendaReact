import Navbar from "../../components/Navbar/Navbar";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom";

export default function Products () {
    const { id } = useParams();
    return (
        <div className="App">
            <Navbar />
            <ItemDetailContainer id={id}  />
        </div>
    );
}