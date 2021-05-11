import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import Mission from '../images/about-mission.svg'
import Inclusivity from '../images/about-inclusivity.svg'
import Diversity from '../images/about-diversity.svg'
import Equity from '../images/about-equity.svg'
import Innovation from '../images/about-innovation.svg'
import Vision from '../images/about-vision.svg'



const About = () => {
  return (
    <div className="about-container">
      <div className="wrapper"><h1>About Us</h1></div>

      <div className="about-intro">
        <div className="paragraph">
          <p>Welcome to <strong>STEMStartHer</strong>!</p>
          <p>Did you know that women are nearly half of U.S. Workforce but only 27% of STEM Workers?</p>
          <p>We're want to help bridge that gap.</p>
        </div>
        <br />
        <div className="paragraph">
          <p><strong>STEMStartHer</strong> is for women who are curious about STEM careers but unsure which exact path to go down</p>
          <p>For women who might have questions about what that job title really means</p>
          <p>For women who don't know who to turn to with those questions</p>
          <p>For women like YOU, trying to decide which path is right for me?</p>
        </div>
        <br />
        <div className="paragraph">
          <p>The team here at <strong>STEMStartHer</strong> have created this platform to streamline the connection making process, so explorers can focus on having those vital information gathering conversations on the way to a STEM career, and Guides can contribute in a meaningful way without a long term time commitment.</p>
        </div>
      </div>
      <div className="about-mission">
        <div className="mission-left">
          <img src={Mission} alt="Mission" />
        </div>
        <div className="mission-right">
          <h1>Our Mission Statement</h1>
          <p>Demystifying STEM career paths by connecting STEM curious women with experienced STEM professionals.</p>
        </div>
      </div>

      <div className="about-values">
        <h1>Our Values</h1>
        <div>
          <img src={Inclusivity} alt="Inclusivity"/>
          <h5>Inclusivity</h5>
          <img src={Diversity} alt="Diversity"/>
          <h5>Diversity</h5>
          <img src={Equity} alt="Equity"/>
          <h5>Equity</h5>
          <img src={Innovation} alt="Innovation"/>
          <h5>Innovation</h5>
        </div>
      </div>

      <div className="about-vision">
        <h1>The Vision</h1>
        <div className="paragraph vision-left">
          <p>We exist to create opportunities for the next generation of women in STEM connecting them with leaders in the industry for career support. We are working towards a world where all girls feel free to explore and be inspired by science, technology, engineering and math (STEM) areas.</p>
        </div>
        <div>
          <div className="vision-right">
            <img src={Vision} alt="Vision" />
          </div>
        </div>
      </div>

      <div className="sign-up">
        Interested in joining us?
        <button className="sign-up-btn"><Link to="/signup">Sign Up</Link></button>
      </div>
    </div>
  )
}

export default About;