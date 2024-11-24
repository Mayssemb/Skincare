import React from "react";
import "./ProductCard.css";

function ProductCard({ title, price }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

export default ProductCard;