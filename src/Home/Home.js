import React from 'react'
import RandomGuidesGenerator from '../RandomGuidesGenerator';
import './Home.css';
import { Link } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container,Row,Col,Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Home = ({ guides }) => {
  return (
    <div>
      
      {/* HERO section */}
      <Jumbotron className="home-banner">
        <Container fluid>
          <Row>
            <Col md={6} className="home-banner-left">
              <h1>Choosing a career is<br /> a big deal</h1>
              <p className="lead">We help you make confident career decisions by facilitating direct conversations with working professionals in their field of interest.<br /></p>
              <p>
                <Button variant="primary" className="button blue"><Link to="/about" style={{ textDecoration: 'none', color: "black", }}>Check Out Our Mission! &#8250;</Link></Button>
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

      {/* Guides */}
      <div className="p-4 m-60 guides-recommendation">
        <h2 className="p-20">Talk with our Guides!</h2>
        <RandomGuidesGenerator guides={ guides }/>
      </div>

      <div></div>

      {/* As an Explorer and As a Guide */}
      <div className="container-fluid explorer-guide">
        <div className="row" style={{marginTop: 10}}>
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
