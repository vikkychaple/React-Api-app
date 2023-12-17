
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const API_BASE_URL = 'https://dummyjson.com';

function CategoryProducts() {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      fetch(`${API_BASE_URL}/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          const categoryProductsArray = data.products || [];
          if (Array.isArray(categoryProductsArray)) {
            setCategoryProducts(categoryProductsArray);
          } else {
            console.error('Received non-array data for category products:', data);
            setCategoryProducts([]);
          }
        })
        .catch((error) => {
          console.error('Error fetching category products:', error);
          setCategoryProducts([]);
        });
    }
  }, [category]);

  return (
    <div className="container mt-4">
      <h2>{`Products - ${category}`}</h2>
      <ul>
        {categoryProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryProducts;
