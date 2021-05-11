import React from 'react'
import { Link } from 'react-router-dom'
import RandomGuidesGenerator from '../RandomGuidesGenerator'
import './Welcome.css'


const Welcome = ({ guides }) => {

  return (
    <div className="welcome">
      <div className="appointment-reminder">
        <h1>Your Journey Begins Here!</h1>
        <h5>Welcome, new explorer!</h5>
        <p>This is the start of your career. To begin, check out our Guides at San Francisco, </p>
        <p>When you schedule a meeting, a notification will appear here.</p>
        <Link to="/guides" style={{ textDecoration: "none" }}><button className="button btn-lg appointment-button">Let's Proceed!</button></Link>
      </div>

      {/* randomly generate guides */}
      <div className="guide-recommendation">
        <h1>Check out our Guides!</h1>
        <RandomGuidesGenerator guides={ guides } />
      </div>

      
    </div>
  )
}

export default Welcome
