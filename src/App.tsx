import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/productDetails/ProductDetails";
import Products from "./pages/products/Products";
import React from "react";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/product-details/:id" element={<ProjectDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </div>
  );
}

export default App;
