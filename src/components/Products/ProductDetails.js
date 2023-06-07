import React from "react";
import "./style.css";

const ProductDetails = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-title">Product Details</h1>
        <div className="product-description">
          <h2 className="breadcrumb">Home / {product.name}</h2>
          <h3 className="price">Regular price: Rs. {product.price}</h3>
          <p className="tax-shipping">
            Tax included. Shipping calculated at checkout.
          </p>
        </div>
        <div className="product-options">
          <div className="size-options">
            <h4>SIZE</h4>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>
          <div className="fabric">
            <h4>FABRIC</h4>
            <p>Chiffon</p>
          </div>
          <div className="quantity">
            <h4>QUANTITY</h4>
            <p>1</p>
          </div>
        </div>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <p>Local/International Shipping Available</p>
          <p>Pickup available at Malbus Outlet</p>
          <p>Usually ready in 24 hours</p>
        </div>

        <p className="store-info">View store information</p>
      </div>
    </div>
  );
};

export default ProductDetails;
