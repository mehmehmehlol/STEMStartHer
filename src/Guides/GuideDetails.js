import React from 'react'
import { useParams } from 'react-router-dom'
import RandomGuidesGenerator from '../Guides/RandomGuidesGenerator'

const GuideDetails = ({ guides }) => {
  const { first_name } = useParams();

  return (
      <div className="guide-detail">
        <div className="guide-info">
          {
            guides
              .filter((guide) => guide.first_name === first_name)
              .map((guide) => (
                <div className="full-card" key={ guide.id }>
                  <img className="guide-image" src={guide.profile_pic} alt={guide.first_name} />
                  <h2>Name: {guide.first_name} {guide.last_name}</h2>
                  <h4>Email: {guide.email}</h4>
                  {/* Front-end team: add a linkedin logo here */}
                  <h4>LinkedIn: {guide.linkedin}</h4> 
                  <h4>Location: {guide.geoLocation}</h4>
                  <h4>Job Title: {guide.job_title}</h4>
                  <h4>Company: {guide.company}</h4>
                  <h4>Fields of Expertise: {guide.fields_of_expertise.map(field => <h4>{field}</h4>)}</h4>
                  <h4>Years of Experience: {guide.years_of_experience.map(year => <h4>{year}</h4>)}</h4>
                  <p>{guide.bio}</p>
                </div>
              ))}
        </div>

        <div className="recommended-guides">
          <h1>Recommended Guides</h1>
          <RandomGuidesGenerator guides={ guides } />
        </div>
      </div>
  )
}

export default GuideDetails
