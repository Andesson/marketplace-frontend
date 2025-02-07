import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Meu Site</div>
      <div className="navbar-buttons">
        <Link to="/login" className="navbar-button">
          Login
        </Link>
        <Link to="/signup" className="navbar-button">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;