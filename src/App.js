import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>Tienda</h1>
        <ItemListContainer greeting={"texto prueba"} color={"blue"}  />
      </header>
    </div>
  );
}

export default App;
