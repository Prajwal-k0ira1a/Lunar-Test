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
        style={{ width: '100%', maxWidth: '400px', padding: '12px', marginBottom: '30px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '16px' }}
      />

      {/* Grid Display */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '25px' }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '180px', objectFit: 'contain', marginBottom: '15px' }} />
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
