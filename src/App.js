
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/categories" element={<Categories />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/category/:category" element={<CategoryProducts/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
