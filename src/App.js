import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";
import Product from "./Product/Product";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
