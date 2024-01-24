import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Frames from "./Pages/Frames";
import Cart from "./Pages/Cart";
import Gifts from "./Pages/Gifts";

import Product from "./Pages/Product";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/gifts" element={<ShopCategory category="Gifts" />} />
          <Route
            path="/showPiece"
            element={<ShopCategory category="ShowPiece" />}
          />
          <Route path="product" element={<Product />} />
          <Route path="productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/frames" element={<Frames category="Frames" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
