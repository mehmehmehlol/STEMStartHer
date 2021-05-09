import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      {/* insert fake social media icons */}
      <hr />
      <div className="footer-link">
        <a className="navlink" href="/about">About</a>
        <div className="navlink">FAQs</div>
        <div className="navlink">Standards</div>
        <div className="navlink">Partnership</div>
        <div className="navlink">Donate</div>
      </div>

      <div className="footer-copyright">
        Copyright 2021 ExplorHer
      </div>
    </div>
  )
}

export default Footer
