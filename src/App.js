import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>Tienda</h1>
        <ItemListContainer greeting={"texto prueba"} color={"blue"}  />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
