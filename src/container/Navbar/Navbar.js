import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ user, handleLogin, handleLogout }) => {
  return (
    <div className="navbar">
      <div>
        <Link className='navlink' to='/'>
          {/* logo */}
          ExplorHer
        </Link>
      
      </div>
      {
        user ?
        <div className="nav-right">
          <Link className="navlink" to="/welcome">My Connections</Link>
          <Link className="navlink" to="/guides">Find a Guide</Link>
          <Link className="navlink" to="/" onClick={() => {handleLogout()}}>Log Out</Link>
        </div>
        :
        <div className="nav-right">
          <Link className="navlink" to="/about">About</Link>
          <Link className="navlink" to="/explorers">For Explorers</Link>
          {/* <Link className="navlink" to="/guides">For Guides</Link> */}
          <Link className="navlink" to="/welcome" onClick={() => {handleLogin()}}>Log In</Link>
          <Link className="navlink" to="/signup">Sign Up</Link>
        </div>
      }

      
    </div>
  )
}

export default Navbar
