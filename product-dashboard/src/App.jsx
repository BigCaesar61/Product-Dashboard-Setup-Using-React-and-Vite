//Task 2: Create the App Component

import { useState } from 'react'
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  //products list
  const [products, setProducts] = useState([
    { id: 1, name: 'MacBook', price: 1200.000, description: 'High-performance laptop for work and entertainment.' },
    { id: 2, name: 'iPhone', price: 899.99, description: 'Latest model with advanced features and state of the art camera.' },
    { id: 3, name: 'AirPods', price: 199.99, description: 'New-Gen ear buds for Apple Users.' },
  ]);

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
      <AddProductForm setProducts={setProducts} />
    </div>
  );
};

export default App;