
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <h1 className="navbar-brand" to="/" style={{ color: 'white' }}>API App</h1>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link className="nav-link" to="/"style={{ color: 'white' }}>Home</Link></li>
          <li className="nav-item">
            <Link className="nav-link" to="/products" style={{ color: 'white' }}>Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/products/categories" style={{ color: 'white' }}>
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
