//Task 3: Create the ProductList Component

import React from "react";
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return (
      <div>
        {products.map((product) => (
          <ProductItem
            key={product.id} // ID is unique key
            product={product} // Passing the product data as a prop
          />
        ))}
      </div>
    );
  };
  
  export default ProductList;