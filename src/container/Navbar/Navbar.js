import React from 'react';
import { Link } from 'react-router-dom';


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
        <Link className="button-medium" to="/login">Log In</Link>
        <Link className="button-medium" to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
