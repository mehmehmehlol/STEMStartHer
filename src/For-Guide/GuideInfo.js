import React from 'react'
import { Link } from 'react-router-dom'
import './GuideInfo.css'
import StepOne from '../images/guide-bubble-step-1.svg'
import StepOneLine from '../images/step1-step2-line.svg'
import StepTwo from '../images/guide-bubble-step-2.svg'
import StepTwoLine from '../images/step2-step3-line.svg'
import StepThree from '../images/guide-bubble-step-3.svg'
import Guide1 from '../images/guide-1.svg'
import Guide2 from '../images/guide-2.svg'
import Guide3 from '../images/guide-3.svg'

const GuideInfo = () => {
  return (
    <div className="for-guide-container">
      <div className="wrapper">
        <h1>How Does it Work for Guides?</h1>
      </div>

      <div className="guide-steps-container">
      <div className="guide-steps row">
        {/* Step 1 */}
        <div className="col-md-6">
          <div className="step-content-left">
              <div className="step-number-left">
                1
              </div>
              <h1 className="step-heading-left">Apply to become a guide.</h1>

              <p>Sign up to be a guide and fill our your profile with your areas of expertise to maximise your contribution.</p>
            </div>
        </div>
        <div className="col-md-6">
            <img className="bubble-left" src={StepOne} alt="Guide Bubble Step 1"/>
            <img className="line-step1-2" src={StepOneLine} alt="line" />
        </div>
          
    

        {/* Step 2 */}
        <div className="col-md-6">
          <img className="bubble-right" src={StepTwo} alt="Guide Bubble Step 2"/>
        </div>
        <div className="col-md-6">
          <div className="step-content">
              <div className="step-number">2</div>

              <h1 className="step-heading">Wait for your first booking.</h1>
              <p>Get notified when an Explorer books an Adventure with you, accept the booking, and prepare for the call by checking out the Explorer’s profile.</p>
              <img className="line-step2-3" src={StepTwoLine} alt="line" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-md-6">
          <div className="step-content-left">
            <div className="step-number-left">3</div>

              <h1 className="step-heading-left">Attend the booked call.</h1>
              <p>When it’s time to meet, log in to access the video call via the platform and start a meaningful conversation right away!</p>

          </div>
          </div>
          <div className="col-md-6">
              <img className="bubble-left" src={StepThree} alt="Guide Bubble Step 3"/>
          </div>
        </div>
      </div>
   
      {/* testimonial */}
      <div className="guide-testimonial">
        <h1>Testimonials from past guides</h1>
        <div className="guide-testimonial-content row">
          {/* <div className="guide-say"> */}
            <div className="col-md-3">
              <img src={Guide1} alt="Guide 1 Pic" />
            </div>
            <div className="col-md-9">
              <p>“I love how easy the platform makes it for me to set my schedule up and then hop into a call, I feel like I’m helping these women understand what someone in my role really does. “</p>
            </div>
          {/* </div> */}

            <div className="col-md-3">
              <img src={Guide2} alt="Guide 2 Pic" />
            </div>
            <div className="col-md-9">
              <p>“I’ve been on calls with women from all walks of life- high school students and career transitioners, and it’s so fulfilling to see the interest in my career path and also STEM jobs in general!”</p>
          </div>

          {/* <div className="guide-say"> */}
          <div className="col-md-3">
            <img src={Guide3} alt="Guide 3 Pic" />
          </div>
          <div className="col-md-9">
            <p>“The most rewarding thing about this is how quickly I was able to jump in and answer questions directly from a curious young woman, but I don’t have to worry about clearing out large chunks of time from my schedule to participate.”</p>
          </div>      
        </div>
      </div>
      

      <div className="sign-up">
        <h5>Ready to become a Guide?</h5>
        <button className="sign-up-btn"><Link to="/signup">Sign Up</Link></button>
      </div>

    </div>
  )
}

export default GuideInfo
