import React from 'react'
import './Explorers.css'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import { Link } from 'react-router-dom'
import img0 from '../images/Section-Bubbles.svg'
import img1 from '../images/Companies.svg'
import img2 from '../images/Testimonial.svg'

const Explorers = ({ guides }) => {
  return (
    <div>
      <div className="explorer-container">
      <h1 className="heading">How does it work for explorers?</h1>
      </div>
      <img className="section-bubble" alt="Section Bubble" src={img0}/>
        
      <>
        <h4 className="heading">Check out our Guides!</h4>
        <Carousel itemsToShow={4} itemsToScroll={2}>
          { guides.map(guide => (
            <Item key={ guide.id }>
              <img className="guide-image" src={guide.profile_pic} alt={guide.first_name} />
              <h4>Name: <Link to={`/guides/${guide.first_name}`}>{guide.first_name} {guide.last_name}</Link></h4>
              {/* image work logo */}
              <h4>{guide.job_title}</h4>
              <h4>{guide.company}</h4>
              {/* image earth logo */}
              <h5>{guide.geoLocation}</h5>
            </Item>
          ))}
        </Carousel>
      </>
      <>
      <img className="companies" alt="Companies" src={img1}/>
      </>
      <img className="testimonial" alt="Testimonial" src={img2}/>
      <>
      <div className="sign-up">
        <h5>Ready to become an Explorer?</h5>
        <button className="sign-up-btn"><Link to="/signup">Sign Up</Link></button>
        </div>
      </>
    </div>
  )
}

export default Explorers
