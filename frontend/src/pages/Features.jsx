import React from "react";
import ProductCard from "../components/ProductCard"; // Component for individual product cards
import "./Features.css";

function Features({ products, addToCart }) {
  return (
    <section className="features-section">
      <h2>Our Beautiful Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
