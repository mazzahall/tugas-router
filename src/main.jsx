import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Image from "./Image.jsx";

import DataLayout from "./DataLayout.jsx";
import Data from "./data/Data.jsx";
import Product from "./data/Products.jsx";
import ProductDetail from "./data/ProductDetail.jsx";
import Customer from "./data/Customers.jsx";
import Seller from "./data/Sellers.jsx";
import ProductSearch from "./data/ProductSearch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="images/*" element={<Image />} />

          <Route path="data" element={<DataLayout />}>
            <Route index element={<Data />} />
            <Route path="products" element={<Product />} />
            <Route path="products/search" element={<ProductSearch />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="customers" element={<Customer />} />
            <Route path="sellers" element={<Seller />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);