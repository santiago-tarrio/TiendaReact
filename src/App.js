import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home/Home"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"
import Cart from "./views/Cart/Cart"
import { CartProvider } from "./components/CartContext/CartContext"

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/category/:categoryname" element={<Category />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
