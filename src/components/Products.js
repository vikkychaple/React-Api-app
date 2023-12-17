import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://dummyjson.com';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        const productsArray = data.products || [];
        if (Array.isArray(productsArray)) {
          setProducts(productsArray);
        } else {
          console.error('Received non-array data for products:', data);
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
