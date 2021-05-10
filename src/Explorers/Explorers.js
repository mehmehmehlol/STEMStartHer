import React from 'react'
import './Explorers.css'
import img from '../images/Section-Bubbles.svg'

const Explorers = () => {
  // Alyssa
  return (
    <div className="header">
      <div className="header-bar"></div>
      <h1>How does it work for explorers?</h1>
      <img className="section-bubbles" src={img}/>
      {/* import guide recommendation */}
    </div>
  )
}

export default Explorers
