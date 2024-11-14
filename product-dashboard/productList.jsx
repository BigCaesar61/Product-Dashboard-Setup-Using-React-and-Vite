//Task 3: Create the ProductList Component

import React from 'react';
import ProductItem from './ProductItem';

const productList = ({ products }) => {
    retrun (
        <div>
      {products.map((product) => (
        <ProductItem
          key={product.id} // IDs are the unique keys
          product={product} // passing the product data
        />
      ))}
    </div>
    );
};

export default productList