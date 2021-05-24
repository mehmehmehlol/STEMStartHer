import React from 'react'
import './Explorers.css'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import { Link } from 'react-router-dom'
import img0 from '../images/Section-Bubbles.svg'
import img1 from '../images/Companies.svg'
// import img2 from '../images/Testimonial.svg'
import Explorer1 from '../images/explorer-1.svg'
import Explorer2 from '../images/explorer-2.svg'
import Explorer3 from '../images/explorer-3.svg'

const Explorers = ({ guides }) => {
  return (
    <div>
      <div className="explorer-container">
      <h1 className="heading">How does it work for explorers?</h1>
      </div>
      <img className="section-bubble" alt="Section Bubble" src={img0}/>
        
      <>
        <h1 className="heading">Check out our explorers!</h1>
        <Carousel itemsToShow={4} itemsToScroll={2}>
          { guides.map(guide => (
            <Item key={ guide.id }>
              <img className="explorer-image" src={guide.profile_pic} alt={guide.first_name} />
              <h4>Name: <Link to={`/explorers/${guide.first_name}`}>{guide.first_name} {guide.last_name}</Link></h4>
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
      <div className="explorer-testimonial">
        <h1>Testimonials from past explorers</h1>
        <div className="explorer-testimonial-content row">
            <div className="col-md-3">
              <img src={Explorer1} alt="Explorer 1 Pic" />
            </div>
            <div className="col-md-9">
              <p>“I used to be scared of networking, but ExplorHer pushed me out of my comfort zone and got rid of that fear. It actually helped me build confidence, connected me with women who encouraged me to hone my skills, and paved new paths for me in the STEM fields.”</p>
            </div>

            <div className="col-md-3">
              <img src={Explorer2} alt="Explorer 2 Pic" />
            </div>
            <div className="col-md-9">
              <p>“I used to be scared of networking, but ExplorHer pushed me out of my comfort zone and got rid of that fear. It actually helped me build confidence, connected me with women who encouraged me to hone my skills, and paved new paths for me in the STEM fields.”</p>
          </div>

          <div className="col-md-3">
            <img src={Explorer3} alt="Explorer 3 Pic" />
          </div>
          <div className="col-md-9">
            <p>“I used to be scared of networking, but ExplorHer pushed me out of my comfort zone and got rid of that fear. It actually helped me build confidence, connected me with women who encouraged me to hone my skills, and paved new paths for me in the STEM fields.”</p>
          </div>      
        </div>
      </div>
      <div className="sign-up">
        <h5>Ready to become an Explorer?</h5>
        <button className="sign-up-btn button blue"><Link to="/signup" style={{ color: "black" }}>Sign Up</Link></button>
        </div>
    </div>
  )
}

export default Explorers
