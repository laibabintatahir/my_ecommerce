import React, { useState } from "react";
import "./style.css";
import Cart from "./Cart";
  const Hijabs = () => {
    const [hijabsdata, sethijabsdata] = useState([
      { id: 1, name: "CHIFFON HIJAB Amblish", price: 700, image: "images/h1.jpg" },
      { id: 2, name: "CHIFFON HIJABClestial", price: 500, image: "images/h2.jpg" },
      { id: 3, name: "Graceful CHIFFON HIJAB", price: 600, image: "images/h3.jpg" },
      { id: 4, name: "Floral CHIFFON HIJAB Sundress", price: 780, image: "images/h4.jpg" },
      { id: 5, name: "Dreamy Chiffon HIJAB", price: 630, image: "images/h5.jpg" },
      { id: 10, name: "ACHIFFON HIJAB", price: 455, image: "images/h10.jpg" },
      { id: 11, name: "Dreamy Chiffon ", price: 560, image: "images/h11.jpg" },
      { id: 12, name: "CHIFFON HIJAB MA", price: 650, image: "images/h12.jpg" },
      { id: 6, name: "CHIFFON HIJAB Wrap s", price: 535, image: "images/h3.jpg" },
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
        <h2>HIJABS</h2>
        <div className="shoes-container">
          {hijabsdata.map((shoe) => (
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

export default Hijabs;