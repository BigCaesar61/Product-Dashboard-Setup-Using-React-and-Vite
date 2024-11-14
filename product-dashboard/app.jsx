//Task 2: Create the App Component

import React, {useState} from "react";
import ProductList from './productList';
import AddProductForm from './AddProductForm';




const App = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Mac Book', price: 999.99, description: 'High-performance laptop for work and entertainment.' },
        { id: 2, name: 'Apple Watch', price: 599.99, description: 'Latest model with advanced features.' },
        { id: 3, name: 'iPhone', price: 899.99, description: 'Latest model of iPhone.' },
    ]);

    return (
        <div>
      <h1>Product List</h1>
      <ProductList products={products} />
      <AddProductForm setProducts={setProducts} />
    </div>

    );
};