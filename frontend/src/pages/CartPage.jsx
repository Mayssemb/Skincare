import React from "react";
import "./CartPage.css";

function CartPage({ cart, removeFromCart, changeQuantity, emptyCart }) {
  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + parseFloat(product.price.replace("$", "")) * product.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is currently empty.</p>
            <p>Start shopping and add items to your cart!</p>
            <a href="/shop">Browse Products</a>
          </div>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <div className="cart-item-actions">
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => changeQuantity(product.id, e.target.value)}
                    min="1"
                    className="cart-item-quantity"
                  />
                  <button onClick={() => removeFromCart(product.id)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          <button onClick={emptyCart} className="empty-cart-btn">
            Empty Cart
          </button>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
