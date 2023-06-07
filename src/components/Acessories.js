import React, { useState } from "react";
import "./style.css";
import Cart from "./Cart";

const Acessories = () => {
  const [Acessoriesdata, setAcessoriesdata] = useState([
    { id: 1, name: "HIJAB MAGNET", price: 700, image: "images/a1.jpg" },
    { id: 2, name: "HIJAB MAGNET", price: 500, image: "images/a2.jpg" },
    { id: 3, name: "HIJAB MAGNET", price: 600, image: "images/a3.jpg" },
    { id: 4, name: "AMETHYST HIJAB PIN", price: 780, image: "images/a4.jpg" },
    { id: 5, name: "AMETHYST HIJAB PIN", price: 630, image: "images/a5.jpg" },
    { id: 10, name: "AMETHYST HIJAB PIN", price: 455, image: "images/a6.jpg" },
    { id: 11, name: "FLORA SILK SCRUNCHIE", price: 560, image: "images/a8.jpg" },
    { id: 12, name: "FLORA SILK SCRUNCHIE", price: 650, image: "images/a9.jpg" },
    { id: 6, name: "FLORA SILK SCRUNCHIE", price: 535, image: "images/a10.jpg" },
    { id: 7, name: "SULEMANI AQEEQ", price: 400, image: "images/a11.jpg" },
    { id: 8, name: "SULEMANI AQEEQ", price: 560, image: "images/a12.jpg" },
    { id: 9, name: "SULEMANI AQEEQ", price: 550, image: "images/a7.jpg" },
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
        <h2>ACCESSORIES</h2>
        <div className="shoes-container">
          {Acessoriesdata.map((shoe) => (
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

export default Acessories;
