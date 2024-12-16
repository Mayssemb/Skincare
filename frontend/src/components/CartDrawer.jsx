import React from "react";

function CartDrawer({ cart, closeDrawer }) {
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-drawer">
      <button className="close-btn" onClick={closeDrawer}>Close</button>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="cart-item-info">
              <h3>{product.title}</h3>
              <p>{product.price} x {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
}

export default CartDrawer;
