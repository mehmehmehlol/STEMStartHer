import React from 'react'
import './Explorers.css'
import img from '../images/Section-Bubbles.svg'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import { Link } from 'react-router-dom'

const Explorers = ({ guides }) => {
  return (
    <div className="header">
      <div className="header-bar"></div>
      <h1>How does it work for explorers?</h1>
      <img className="section-bubbles" src={img}/>
      {/* import guide recommendation */}
      <h3>1 Professionals have career path experience that students want.</h3>
      <>
        <h4>Check out our Guides</h4>
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
      <div className="testimonial">
      </div>
      <>
        <h5>Ready to become an Explorer?</h5>
        <button><Link to="/signup">Sign Up</Link></button>
      </>
    </div>
  )
}

export default Explorers
