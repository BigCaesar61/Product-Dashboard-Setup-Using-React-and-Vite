//Task 6: Create the AddProductForm Component

import React, {useState} from "react";

function AddProductForm() {
    const [product, setProducts] = useState('');

    const handleChange = (event) => {
        setProducts(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Product Submitted: ${product}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Poduct:
                <input type="product" value={product} onChange={handleChange} />
            </label>
        </form>
    );
}

export default AddProductForm