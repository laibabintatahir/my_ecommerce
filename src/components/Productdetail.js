import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) {
    return null; // Return null or a loading indicator if product is undefined
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      {product.description && <p>Description: {product.description}</p>}
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

