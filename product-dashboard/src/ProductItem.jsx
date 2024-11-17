//Task 4: Create the ProductItem Component

import React from "react";

const ProductItem = ({ product }) => {
    return (
      <div className="product-item">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      </div>
    );
  };


  export default ProductItem;