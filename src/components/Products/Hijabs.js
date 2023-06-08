import "./style.css";
import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import Cart from "./Cart";

  const Hijabs = () => {
    // The useContext hook
    const { cartItems, setCartItems } = useContext(AppContext);

    const hijabsdata = [
      { id: 1, name: "CHIFFON HIJAB AMBLISH", price: 700, image: "images/h1.jpg" },
      { id: 2, name: "CHIFFON HIJABCLESTIL", price: 500, image: "images/h2.jpg" },
      { id: 3, name: "Graceful CHIFFON HIJAB", price: 600, image: "images/h3.jpg" },
      { id: 4, name: "Floral CHIFFON HIJAB SUNDRESS", price: 780, image: "images/h4.jpg" },
      { id: 5, name: "Dreamy Chiffon HIJAB", price: 630, image: "images/h5.jpg" },
      { id: 10, name: "ACHIFFON HIJAB", price: 455, image: "images/h10.jpg" },
      { id: 11, name: "DREAMY CHIFON ", price: 560, image: "images/h11.jpg" },
      { id: 12, name: "CHIFFON HIJAB MA", price: 650, image: "images/h12.jpg" },
      { id: 6, name: "CHIFFON HIJAB WRAP s", price: 535, image: "images/h3.jpg" },
    ];


    const handleAddToCart = (product) => {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    };
  
    const increaseQuantity = (item) => {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    };
  
    const decreaseQuantity = (item) => {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id && cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
    };
  
    const removeItem = (item) => {
      const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updateCart);
    };
  
    return (
      <div>
        <div className="women-shoes-section">
          <h2>HIJABS</h2>
          <div className="shoes-container">
            {hijabsdata.map((shoe) => (
              <div
                className="shoe-card"
                key={shoe.id}
                
              >
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
