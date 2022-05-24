import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"
import Cart from "./views/Cart/Cart"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/category/:categoryname" element={<Category />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
