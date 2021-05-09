import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link className='navlink logo' to='/'>
          <div className="logo-pic"></div>
          <div className="logo-text"></div>
        </Link>
      
      </div>

      <div className="nav-right">
        <Link className="navlink" to="/about">About</Link>
        <Link className="navlink" to="/explorers">For Explorers</Link>
        <Link className="navlink" to="/guides">For Guides</Link>
        
        <Link to="/login">
          <div className="button btn-med blue">Log In</div>
        </Link>
        <Link to="/signup">
          <div className="button btn-med">Sign Up</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
