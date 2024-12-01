import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-card-image" />
      <div className="product-card-content">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-price">{product.price}</p>
        <div className="product-card-quantity">
          <label>Quantity: </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className="quantity-input"
          />
        </div>
        <button onClick={handleAddToCart} className="product-card-btn">
          Add to Cart
        </button>
        <Link to={`/product/${product.id}`} className="product-card-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
