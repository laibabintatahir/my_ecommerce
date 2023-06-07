import React, { useState } from "react";
import "./style.css";
import Cart from "./Cart";

const Abaya = () => {

  const [abayasdata, setabayasdata] = useState([
    { id: 1, name: "MW Amblish", price: 1050, image: "images/s1.jpg" },
    { id: 2, name: "MW Clestial", price: 1500, image: "images/s2.jpg" },
    { id: 3, name: "Graceful Eleganc", price: 2000, image: "images/s3.jpg" },
    { id: 4, name: "M Charming Floral Sundress", price: 2050, image: "images/s4.jpg" },
    { id: 5, name: "Dreamy Chiffon", price: 2330, image: "images/s5.jpg" },
    { id: 6, name: "Dreamy Chiffon Wrap Dress", price: 2535, image: "images/s13.jpg" },
    { id: 7, name: "Sophisticated Satin Abaya", price: 4440, image: "images/s7.jpg" },
    { id: 8, name: "Bohemian Ruffled Maxi Dress", price: 5645, image: "images/s8.jpg" },
    { id: 9, name: "Clestial", price: 2350, image: "images/s9.jpg" },
    { id: 10, name: "Amblish 10", price: 2455, image: "images/s10.jpg" },
    { id: 11, name: "Dreamy Chiffon Wrap Dress", price: 6560, image: "images/s11.jpg" },
    { id: 12, name: "Graceful Eleganc", price: 2365, image: "images/s12.jpg" },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (shoe) => {
    const existingItem = cartItems.find((item) => item.id === shoe.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...shoe, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const removeItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <div className="women-shoes-section">
        <h2>ABAYAS</h2>
        <div className="shoes-container">
          {abayasdata.map((shoe) => (
            <div className="shoe-card" key={shoe.id}>
              <img src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p>Price: {shoe.price}</p>
              <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Cart
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
      />
    </div>
  );
};

export default Abaya;

 