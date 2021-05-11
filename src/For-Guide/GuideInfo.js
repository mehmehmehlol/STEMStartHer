import React from 'react'
import { Link } from 'react-router-dom'

const GuideInfo = () => {
  return (
    <div>
      <div class="header">
        <h1 class="heading">How does it work for guide?</h1>
      </div>

      {/* testimonial */}
      
      <>
      <div className="sign-up">
        <h5>Ready to become an Explorer?</h5>
        <button className="sign-up-btn"><Link to="/signup">Sign Up</Link></button>
        </div>
      </>
      </div>
  )
}

export default GuideInfo
