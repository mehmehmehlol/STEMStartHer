import React from 'react'
import "./Footer.css"
import Facebook from '../../images/FacebookLogo.png'
import Instagram from '../../images/InstagramLogo.png'
import Twitter from '../../images/TwitterLogo.png'
import Linkedin from '../../images/LinkedinLogo.png'

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
            <img className="social-icon" src={Facebook} alt="Facebook logo"/>
            <img className="social-icon" src={Instagram} alt="Instagram logo"/>
            <img className="social-icon" src={Twitter} alt="Twitter logo" />
            <img className="social-icon" src={Linkedin} alt="Linkedin logo" />
          </div>
          <div className="footer-bar"></div>
          <div className="footer-links">
            <div className="footer-navlink">About</div>
            <div className="footer-navlink">FAQs</div>
            <div className="footer-navlink">Standards</div>
            <div className="footer-navlink">Partnership</div>
            <div className="footer-navlink">Donate</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
