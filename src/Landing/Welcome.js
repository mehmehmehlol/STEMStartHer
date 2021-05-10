import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Welcome = ({ guides }) => {

  const [randomNumber, setRandomNumber] = useState(1)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * guides.length)
    setRandomNumber(randomNumber)
  }

  return (
    <div className="welcome">
      <div className="appointment-reminder">
        <h1>Your Journey Begins Here!</h1>
        <h5>Welcome, new explorer!</h5>
        <p>This is the start of your career. To begin, check out our Guides at San Francisco, </p>
        <p>When you schedule a meeting, a notification will appear here.</p>
        <button><Link to="/guides">Let's Proceed!</Link></button>
      </div>

      <div className="guides-display-container">
          {/* randomly generate guides */}
        {/* <div className="guides-display">
          <div key={ guides[randomNumber].id }>
            <img className="guide-image" src={guides[randomNumber].profile_pic} alt={guides[randomNumber].first_name} />
            <h4>Name: <Link to={`/guides/${guides[randomNumber].first_name}`}>{guides[randomNumber].first_name} {guides[randomNumber].last_name}</Link></h4>
            <h4>Job Title: {guides[randomNumber].job_title}</h4>
            <h4>Company: {guides[randomNumber].company}</h4>
          </div>
        </div> */}
        
      </div>
    </div>
  )
}

export default Welcome
