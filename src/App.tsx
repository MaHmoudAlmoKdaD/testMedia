import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import ProjectDetails from "./pages/productDetails/ProductDetails";
import Products from "./pages/products/Products";
import React from "react";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/product-details/:id" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
