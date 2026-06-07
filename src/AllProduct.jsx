import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function AllProduct() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data); 
    
      })
      .catch((err) => {
        console.error("Axios product fetch error:", err.message);
         });
  }, []);


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>All Products</h1>
      
      {/* Search Input Control */}
      <input
        type="text"
        placeholder="Search products by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Grid Display */}
      <div >
        {filteredProducts.map((product) => (
          <div key={product.id} >
            <img src={product.image} alt={product.title} />
            <div>
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
