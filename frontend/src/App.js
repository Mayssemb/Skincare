import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./pages/Features";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn"; // Import SignIn component
import SignUp from "./pages/SignUp.jsx"; // Import SignUp component
import Customers from "./pages/Customers";  
import Profile from "./components/Profile";    
import PrivateRoute from './components/PrivateRoute';

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };

  const changeQuantity = (id, newQuantity) => {
    setCart(cart.map(product => 
      product.id === id ? { ...product, quantity: newQuantity } : product
    ));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const products = [
    {
      id: 1,
      title: "Product One",
      price: "$19.99",
      image: require("./assets/images/product-01.jpg"),
      description: "This is a great product with amazing features.",
    },
    {
      id: 2,
      title: "Product Two",
      price: "$29.99",
      image: require("./assets/images/product-02.jpg"),
      description: "This product will enhance your skincare routine.",
    },
    {
      id: 3,
      title: "Product Three",
      price: "$39.99",
      image: require("./assets/images/product-03.jpg"),
      description: "Experience the best quality with this amazing product.",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<Features products={products} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity} emptyCart={emptyCart} />} />

          {/* Protected Routes */}
          <Route
            path="/customers"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <Customers />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute allowedRoles={['user']}>
                <Profile />
              </PrivateRoute>
            }
          />
          
          {/* Sign In and Sign Up Routes */}
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />

          <Route path="*" element={<HeroSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;