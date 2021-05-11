import React from 'react'
import './Home.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container,Row,Col,Form,Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Home = () => {
  // Diana
  return (
    <div>
      
      {/* HERO section */}
      <Jumbotron className="home-banner">
        <Container fluid>
          <Row>
            <Col md={6} className="home-banner-left">
              <h1>Choosing a career is<br /> a big deal</h1>
              <p className="lead">We help you make confident career decisions by faciliatiing direct conversations with working professionals in their field of interest.<br /></p>
              <p>
                <Button variant="primary" className="btn-blue">How it works &#8250;</Button>
              </p>
            </Col>
            <Col md={6} className="home-banner-right"><img src="https://i.imgur.com/gaCEgAO.png" alt="girl reading a book" /></Col>
          </Row>
        </Container>
      </Jumbotron>

      {/* Search bar */}
      <div className="home-search-wrapper p-4">
        <Container fluid className="home-search">
          <Row>
            <Col><h2 className="p-4 text-center "><strong>Get guidance</strong> for career exploration from <strong>STEM field professionals</strong> around the world</h2></Col>
          </Row>
          <div>
          <Form className="search-guide p-4">
            <Row>
              <Col md={10}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="input" placeholder="Search by name, profession, industry or location..." />
                </Form.Group>
              </Col>
              <Col md={2} className="pl-0">
                <Button variant="primary" className="search-btn btn-md btn-green" type="submit">
                  Find a guide
                </Button>
              </Col>
            </Row>
          </Form>
          </div>
        </Container>
      </div>

      {/* Talk with our Guides */}
      <Container fluid className="p-4 m-4">
        <Row>
          <Col>
            <h2 className="p-4">Talk with our Guides!</h2>  
          </Col>
          {/* <div className="col p-4 scroll-guides text-right">
            <button className="btn btn-primary btn-green mr-2"><span className="caret-bigger">&#8249;</span></button>
            <button className="btn btn-primary btn-green"><span className="caret-bigger">&#8250;</span></button>
          </div> */}
        </Row>
        
        {/* import guides here */}
        <Container fluid className="guide-cards">

           {/* mentors row 1 */}
           <Row className="mb-2 p-2">
            <Col className="md-3">
              <Card>
                <Card.Img variant="top" src="https://i.imgur.com/wFwCEKP.jpeg" />
                <Card.Body>
                  <Card.Title>Regina Villanueva</Card.Title>
                  <Card.Text>
                    <p>Microelectronics Research Engineer</p>
                    <p><small>at P.B. Matheson Micro</small></p>
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col className="md-3">
              <Card>
                <Card.Img variant="top" src="https://i.imgur.com/5t1iB2x.jpg" />
                <Card.Body>
                  <Card.Title>Marie Bellanti</Card.Title>
                  <Card.Text>
                    <p>Pharmacy Technician<br/></p>
                    <p><small>at Kaiser Permanente</small></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="md-3">
              <Card>
                <Card.Img variant="top" src="https://i.imgur.com/nMa3bp0.jpg" />
                <Card.Body>
                  <Card.Title>Rene Johnson</Card.Title>
                  <Card.Text>
                    <p>Wildlife Conservationist<br/></p>
                    <p><small>at National Park Service</small></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="md-3">
              <Card>
                <Card.Img variant="top" src="https://i.imgur.com/zhOUTn1.jpg" />
                <Card.Body>
                  <Card.Title>Brittney Mezynski</Card.Title>
                  <Card.Text>
                    <p>Synthetic Textile Research Chemist<br/></p>
                    <p><small>at Nike</small></p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* end mentors row 1 */}

          {/* mentors row 2 */}
          {/* <div className="row mb-2 p-2">
            <div className="col md-3">
              <div className="card">
                <a href="#"><img className="card-img-top" src="https://i.imgur.com/kqQZNTx.jpg" alt="Card image cap" /></a>
                <div className="card-body">
                  <h5 className="card-title">Jessica Chan</h5>
                  <p className="card-text">Actuary</p>
                  <p className="card-text"><small>at U.S. Department of the Treasury</small></p>
                </div>
              </div>
            </div>
            <div className="col md-3">
              <div className="card">
                <a href="#"><img className="card-img-top" src="https://i.imgur.com/iszCiCF.jpg" alt="Card image cap" /></a>
                <div className="card-body">
                  <h5 className="card-title">Jacqueline Rivera</h5>
                  <p className="card-text">Principal Data Scientist<br/></p>
                  <p className="card-text"><small>AT&#38;T</small></p>
                </div>
              </div>
            </div>
            <div className="col md-3">
              <div className="card">
                <a href="#"><img className="card-img-top" src="https://i.imgur.com/NBvRyVp.jpg" alt="Card image cap" /></a>
                <div className="card-body">
                  <h5 className="card-title">Sathya Balusu</h5>
                  <p className="card-text">Wildlife Conservationist</p>
                  <p className="card-text"><small>at National Park Service</small></p>
                </div>
              </div>
            </div>
            <div className="col md-3">
              <div className="card">
                <a href="#"><img className="card-img-top" src="https://i.imgur.com/1fuVTIF.jpg" alt="Card image cap" /></a>
                <div className="card-body">
                  <h5 className="card-title">Brandi Greer</h5>
                  <p className="card-text">Materials, Process &#38; Delivery (MPD) Engineer</p>
                  <p className="card-text"><small>at Procter and Gamble</small></p>
                </div>
              </div>
            </div>
          </div> */}
          {/* end mentors row 2 */}

          <div className="text-center m-4 p-4"><button className="btn btn-primary btn-lg btn-green">Search more Guides</button></div>

        </Container>
      </Container>

      



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
