//Task 4: Create the ProductItem Component

import React from "react";


const ProductItem = ({ product}) => {

    return (
        <div style={styles.container}>
        <h2 style={styles.name}>{product.name}</h2>
        <p style={styles.price}>Price: ${product.price.toFixed(2)}</p>
        <p style={styles.description}>{product.description}</p>
      </div>
    );
};


const styles = {
    container: {
        border: '1px solid #ddd',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
      },
      name: {
        margin: '0 0 10px',
        fontSize: '18px',
      },
      price: {
        margin: '5px 0',
        color: '#28a745',
        fontWeight: 'bold',
      },
      description: {
        margin: '5px 0',
        color: '#555',
      },
};

export default ProductItem;