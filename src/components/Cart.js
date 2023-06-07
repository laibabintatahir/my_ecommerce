import React from "react";
import "./style.css";

const Cart = ({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) => {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                  </div>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => decreaseQuantity(item)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item)}>+</button>
                  <button onClick={() => removeItem(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total-price">Total Price: {totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
