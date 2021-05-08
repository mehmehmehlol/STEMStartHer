import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link className='navlink' to='/'>
          {/* logo */}
          ExplorHer
        </Link>
      
      </div>

      <div className="nav-right">
        <Link className="navlink" to="/about">About</Link>
        <Link className="navlink" to="/explorers">For Explorers</Link>
        <Link className="navlink" to="/guides">For Guides</Link>
        <Link className="navlink" to="/login">Log In</Link>
        <Link className="navlink" to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
