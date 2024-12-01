import React from "react";

function CartDrawer({ cart, closeDrawer }) {
  return (
    <div className="cart-drawer">
      <button onClick={closeDrawer}>Close</button>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
}

export default CartDrawer;
