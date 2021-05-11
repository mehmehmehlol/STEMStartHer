import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({ user, handleLogin, handleLogout }) => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link className='navlink logo' to='/home'>
          <div className="logo-pic"></div>
          <div className="logo-text"></div>
        </Link>
      
      </div>
      {
        user ?
        <div className="nav-right">
          <Link className="navlink" to="/welcome">My Connections</Link>
          <Link className="navlink" to="/guides">Find a Guide</Link>
          <Link className="navlink" to="/home" onClick={() => {handleLogout()}}>Log Out</Link>
        </div>
        :
        <div className="nav-right">
          <Link className="navlink" to="/about">About</Link>
          <Link className="navlink" to="/explorers">For Explorers</Link>
          <Link className="button btn-med blue" to="/welcome" onClick={() => {handleLogin()}}> 
              Log In
          </Link>
          <Link className="button btn-med " to="/signup">Sign Up</Link>
        </div>
      }
    </div>
  )
}

export default Navbar
