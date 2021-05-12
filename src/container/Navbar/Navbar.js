

import React from 'react';
import { Link } from 'react-router-dom';
// import LogoText from '../../images/logo-text.svg'
import './Navbar.css';


const Navbar = ({ user, handleLogin, handleLogout }) => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link className='navlink logo' to='/'>
          <div className="logo-pic"></div>
          <div className="logo-text" style={{ width: 170 }}>
            {/* <img src={LogoText} alt="STEMStartHer"/> */}
          </div>
        </Link>
      
      </div>
      {
        user ?
        <div className="nav-right">
          <Link className="navlink" to="/welcome" style={{ textDecoration: "none" }}>My Connections</Link>
          <Link className="navlink" to="/guides" style={{ textDecoration: "none" }}>Find a Guide</Link>
          <Link className="button btn-med blue" to="/" onClick={() => {handleLogout()}} style={{ textDecoration: "none" }}>Log Out</Link>
        </div>
        :
        <div className="nav-right">
          <Link className="navlink" to="/about" style={{ textDecoration: "none" }}>About</Link>
          <Link className="navlink" to="/for-explorers" style={{ textDecoration: "none" }}>For Explorers</Link>
          <Link className="navlink" to="/for-guides" style={{ textDecoration: "none" }}>For Guides</Link>
          <Link className="button btn-med blue" to="/welcome" onClick={() => {handleLogin()}} style={{ textDecoration: "none" }}> 
              Log In
          </Link>
          <Link className="button btn-med " to="/signup" style={{ textDecoration: "none" }}>Sign Up</Link>
        </div>
      }
    </div>
  )
}

export default Navbar
