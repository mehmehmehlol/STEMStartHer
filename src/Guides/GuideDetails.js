import React from 'react'
import { Link, useParams } from 'react-router-dom'
import RandomGuidesGenerator from '../RandomGuidesGenerator'
import { Container,Row,Col } from 'react-bootstrap'

const GuideDetails = ({ guides, user }) => {
  const { first_name } = useParams();

  return (
      <div className="guide-detail">
        <div className="guide-profile-cover-bg bg-light">
          <p>&nbsp;</p>
        </div>
        <div className="guide-info">
          {
            guides
              .filter((guide) => guide.first_name === first_name)
              .map((guide) => (

                <div className="full-card" key={ guide.id }>
                  <Container fluid>
                    <Row>
                      <Col md={3} className="details-left">
                        <img className="guide-image mb-4" src={guide.profile_pic} alt={guide.first_name} />
                        <h4>{guide.geoLocation}</h4>
                        <div className="social-media-wrapper">
                          <Link to="{guide.linkedin}">
                            <img className="social-media-icons" src="https://i.imgur.com/nlHjvXU.png" />
                          </Link> 
                          <Link to="{guide.linkedin}">
                            <img className="social-media-icons" src="https://i.imgur.com/RFtVdpa.jpg" />
                          </Link>
                        </div>
                        <Row className="p-2">
                          <Col className="field-of-expertise">
                            <h4>Fields of Expertise: {guide.fields_of_expertise.map(field => <h4>{field}</h4>)}</h4>
                          </Col>
                          <Col className="years-of-experience">
                            <h4>Years of Experience: {guide.years_of_experience.map(year => <h4>{year}</h4>)}</h4>
                          </Col>
                        </Row>
                        
                      </Col>
                      <Col md={9} className="details-right text-left">
                        <h2>{guide.first_name} {guide.last_name}</h2>
                        <h4>{guide.job_title}</h4>
                        <h4 className="pb-4">{guide.company}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum erat augue, ullamcorper tempus nisl dapibus eget. Fusce eget augue non tellus finibus bibendum. Fusce finibus nibh egestas augue facilisis, eu tempor erat volutpat. Aenean viverra mauris eu faucibus vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus in nisl vitae risus pellentesque semper.</p>
                        <p>Suspendisse a nibh eu quam porttitor porta id eu odio. Donec ut dui cursus, molestie arcu sit amet, vestibulum lacus. Nam quis urna euismod, imperdiet nisi at, vulputate quam. Nam quis semper justo. Ut purus mi, pulvinar tincidunt aliquam a, suscipit nec sapien.</p>
                        <p>Suspendisse a nibh eu quam porttitor porta id eu odio. Donec ut dui cursus, molestie arcu sit amet, vestibulum lacus. Nam quis urna euismod, imperdiet nisi at, vulputate quam. Nam quis semper justo. Ut purus mi, pulvinar tincidunt aliquam a, suscipit nec sapien.</p>
                      </Col>
                    </Row>
                  </Container>

                {/* // <div className="full-card" key={ guide.id }>
                //   <img className="guide-image" src={guide.profile_pic} alt={guide.first_name} />
                //   <h2>Name: {guide.first_name} {guide.last_name}</h2>
                //   <h4>Email: {guide.email}</h4> */}
                {/* //   Front-end team: add a linkedin logo here */}
                {/* //   <h4>LinkedIn: {guide.linkedin}</h4> 
                //   <h4>Location: {guide.geoLocation}</h4>
                //   <h4>Job Title: {guide.job_title}</h4>
                //   <h4>Company: {guide.company}</h4>
                //   <h4>Fields of Expertise: {guide.fields_of_expertise.map(field => <h4>{field}</h4>)}</h4>
                //   <h4>Years of Experience: {guide.years_of_experience.map(year => <h4>{year}</h4>)}</h4>
                //   <p>{guide.bio}</p> */}
                  {
                    user 
                    ?
                    <div>
                      <button className="button ">Schedule a chat with {guide.first_name}</button>
                    </div>
                    :
                    <>
                    </>
                  }
                  
                </div>
              ))}
        </div>

        
        <div className="guide-recommendation">
          <h1>Recommended Guides</h1>
            <RandomGuidesGenerator guides={ guides } />
        </div>

        
      </div>
  )
}

export default GuideDetails
