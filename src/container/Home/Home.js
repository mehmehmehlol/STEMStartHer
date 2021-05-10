import React from 'react'
import './Home.css';

const Home = () => {
  // Diana
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
                <a className="btn btn-primary btn-lg btn-blue" href="#" role="button">How it works &#8250;</a>
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
      <div className="p-4 m-4">
        <h2 className="p-4">Talk with our Guides!</h2>
        <div className="container-fluid guide-cards">
          {/* mentors row 1 */}
          <div className="row mb-4 p-4">
            <div className="col md-3">
              <div className="card">
                <a href="#"><img className="card-img-top" src="https://i.imgur.com/wFwCEKP.jpeg" alt="Card image cap" /></a>
                <div class="card-body">
                  <h5 class="card-title">Regina Villanueva</h5>
                  <p class="card-text">Microelectronics Research Engineer</p>
                  <p class="card-text"><small>at P.B. Matheson Micro</small></p>
                </div>
              </div>
            </div>
            <div className="col md-3">
              <div className="card">
                <a href="#"><img className="card-img-top" src="https://i.imgur.com/5t1iB2x.jpg" alt="Card image cap" /></a>
                <div class="card-body">
                  <h5 class="card-title">Marie Bellanti</h5>
                  <p class="card-text">Pharmacy Technician<br/></p>
                  <p class="card-text"><small>at Kaiser Permanente</small></p>
                </div>
              </div>
            </div>
            <div className="col md-3">
              <div className="card">
                <a href="#"><img className="card-img-top" src="https://i.imgur.com/nMa3bp0.jpg" alt="Card image cap" /></a>
                <div class="card-body">
                  <h5 class="card-title">Rene Johnson</h5>
                  <p class="card-text">Federal Population Statistician</p>
                  <p class="card-text"><small>at United States Census Bureau</small></p>
                </div>
              </div>
            </div>
            <div className="col md-3">
              <div className="card">
                <a href="#"><img className="card-img-top" src="https://i.imgur.com/zhOUTn1.jpg" alt="Card image cap" /></a>
                <div class="card-body">
                  <h5 class="card-title">Brittney Mezynski</h5>
                  <p class="card-text">Synthetic Textile Research Chemist</p>
                  <p class="card-text"><small>at Nike</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="guides-recommendation">
        {/* import guides here */}

        {/* make it toggable */}
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
