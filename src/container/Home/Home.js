import React from 'react'
import './Home.css';

const Home = () => {
  // Diana
  return (
    <div>
      <div className="HeroSection">
        {/* backgroundpic */}
        <h1>Choosing a career is a big deal</h1>
        <p>We help you make confident career decisions by faciliatiing direct conversations with working professionals in their field of interest.</p>
      </div>

      <div className="Searchbar">
        {/* import searchbar here */}
      </div>

      <div className="guides-recommendation">
        {/* import guides here */}
        {/* make it toggable */}
      </div>

      <div>
        <div className="user-left">
          <h1>As an explorer</h1>
          <p>Book a call with our experienced guides and explore profession that match your skills, interests, and goals in a friendly and encouraging environment</p>
        </div>
        
        <div className="user-right">
          <h1>As a guide</h1>
          <p>Inspire and guide the next generation of women in STEM with your years of experience in the field</p>
        </div>
      </div>
    </div>
  )
}

export default Home
