import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
      <div className="footer-left logo">
        <div className="logo-pic"></div>
        <div className="logo-text"></div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <div className="social-icon"></div>
          <div className="social-icon"></div>
          <div className="social-icon"></div>
          <div className="social-icon"></div>
        </div>
        <div className="footer-bar"></div>
        <div className="footer-links">
          <a className="navlink" href="/about">About</a>
          <div className="navlink">FAQs</div>
          <div className="navlink">Standards</div>
          <div className="navlink">Partnership</div>
          <div className="navlink">Donate</div>
        </div>
      </div>
      </div>
      <div className="footer-copyright">
        <h4>Copyright 2021 ExplorHer</h4>
      </div>
    </div>
  )
}

export default Footer
