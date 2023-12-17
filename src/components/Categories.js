
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryProducts from './CategoryProducts';
const API_BASE_URL = 'https://dummyjson.com';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setCategories([]);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/products/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <CategoryProducts />
    </div>
  );
}

export default Categories;
