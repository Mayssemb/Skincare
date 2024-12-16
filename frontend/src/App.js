import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./pages/Features";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Customers from "./pages/Customers";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

import banner1 from "./assets/images/banner-1.jpg";
import product01 from "./assets/images/product-01.jpg";
import product02 from "./assets/images/product-02.jpg";
import product03 from "./assets/images/product-03.jpg";
import product04 from "./assets/images/product-04.jpg";
import product05 from "./assets/images/product-05.jpg";
import product06 from "./assets/images/product-06.jpg";
import product07 from "./assets/images/product-07.jpg";
import product08 from "./assets/images/product-08.jpg";
import product09 from "./assets/images/product-09.jpg";
import product10 from "./assets/images/product-10.jpg";
import product11 from "./assets/images/product-11.jpg";
import product15 from "./assets/images/product-15.jpg";
import product16 from "./assets/images/product-16.jpg";
import product17 from "./assets/images/product-17.jpg";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const changeQuantity = (id, newQuantity) => {
    setCart(cart.map((product) =>
      product.id === id ? { ...product, quantity: Math.max(1, newQuantity) } : product
    ));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const products = [
    { id: 1, name: "Cleanser", price: 10, image: product01 },
    { id: 2, name: "Toner", price: 12, image: product02 },
    { id: 3, name: "Moisturizer", price: 15, image: product03 },
    { id: 4, name: "Serum", price: 20, image: product04 },
    { id: 5, name: "Sunscreen", price: 18, image: product05 },
    { id: 6, name: "Exfoliator", price: 25, image: product06 },
    { id: 7, name: "Face Mask", price: 14, image: product07 },
    { id: 8, name: "Eye Cream", price: 30, image: product08 },
    { id: 9, name: "Night Cream", price: 22, image: product09 },
    { id: 10, name: "Body Lotion", price: 19, image: product10 },
    { id: 11, name: "Lip Balm", price: 8, image: product11 },
    { id: 15, name: "Makeup Remover", price: 16, image: product15 },
    { id: 16, name: "Clay Mask", price: 21, image: product16 },
    { id: 17, name: "Micellar Water", price: 11, image: product17 },
  ];

  return (
    <Router>
      <div className="App">
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<HeroSection banner={banner1} />} />
          <Route
            path="/features"
            element={<Features products={products} addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                changeQuantity={changeQuantity}
                emptyCart={emptyCart}
              />
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Customers />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute allowedRoles={["user"]}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<HeroSection banner={banner1} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
