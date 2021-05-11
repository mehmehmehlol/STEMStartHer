import React from 'react'
import RandomGuidesGenerator from '../../Guides/RandomGuidesGenerator';
import './Home.css';
import { Link } from 'react-router-dom'

const Home = ({ guides }) => {
  return (
    <div>
      
      {/* HERO section */}
      <div className="jumbotron home-banner m-0 p-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col md-6">
              <h1 className="display-4">Choosing a career is a big deal</h1>
              <p className="lead">We help you make confident career decisions by faciliatiing direct conversations with working professionals in their field of interest.</p>
              <p className="lead">
                <button className="btn btn-primary btn-lg btn-blue"><Link to="/explorers">How it works &#8250;</Link></button>
              </p>
            </div>
            <div className="col md-6">
              <img src="https://i.imgur.com/gaCEgAO.png" alt="girl reading a book" />
            </div>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="container-fluid home-search bg-light p-4">
            <div className='form-wrapper p-4 text-center'>
              <h2 className="text-center p-4"><strong>Get guidance</strong> for career exploration from <strong>STEM field professionals</strong> around the world</h2>
              <form className="p-4">
                <div className='fullName'>
                      <input type='text' name='fullName' value="Search by name, profession, industry or location..." />&nbsp;
                      <label htmlFor="fullName"><button className="btn btn-primary btn-lg btn-green">Find your guide</button></label>
                </div>
                <div className='submit'>
                  
                </div>
              </form>
            </div>
      </div>

      {/* import guides here */}
      <div className="p-4 m-4 guides-recommendation">
        <h2 className="p-4">Talk with our Guides!</h2>
        <RandomGuidesGenerator guides={ guides }/>
      </div>

      {/* As an Explorer and As a Guide */}
      <div className="container-fluid">
        <div className="row">
          <div className="col md-6 p-4 user-left bg-light">
            <div className="container">
              <div className="row">
                  <div className="col md p-4">
                    <img src="https://i.imgur.com/gfIEbmk.png" alt="explorer" />
                  </div>
                  <div className="col md p-4">
                    <h2>As an explorer</h2>
                    <p>Book a call with our experienced guides and explore profession that match your skills, interests, and goals in a friendly and encouraging environment</p>
                  </div>
              </div>
            </div>
          </div>
          
          <div className="col md-6 p-4 user-right bg-blue">
            <div className="container">
                <div className="row">
                    <div className="col md p-4">
                    <img src="https://i.imgur.com/iQqAFLU.png" alt="explorer" />
                    </div>
                    <div className="col md p-4">
                      <h2>As a guide</h2>
                      <p>Inspire and guide the next generation of women in STEM with your years of experience in the field</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
