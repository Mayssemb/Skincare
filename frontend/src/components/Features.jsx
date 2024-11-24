import React from "react";
import ProductCard from "./ProductCard"; // Component for individual product cards
import "./Features.css";

function Features() {
  const products = [
    {
      id: 1,
      title: "Product One",
      price: "$19.99",
      image: require("../assets/images/product-01.jpg"), // Add the image for this product
    },
    {
      id: 2,
      title: "Product Two",
      price: "$29.99",
      image: require("../assets/images/product-02.jpg"), // Add the image for this product
    },
    {
      id: 3,
      title: "Product Three",
      price: "$39.99",
      image: require("../assets/images/product-03.jpg"), // Add the image for this product
    },
  ];

  return (
    <section className="features-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image} // Pass the image as a prop to ProductCard
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
