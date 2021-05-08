import React from 'react'
import { useParams } from 'react-router-dom'

const GuideDetails = ({ selected }) => {
  let { first_name } = useParams();
  const { last_name, email, linkedin, geoLocation, job_title, company, bio, profile_pic} = selected
  const fields = selected.fields_of_expertise
  const years = selected.years_of_experience

  return (
    <div>
      <div className="guide-detail-container" key={ selected.id }>
        <div>
          <img className="guide-image" src={profile_pic} alt={first_name} />
          <h2>Name: {selected.first_name} {last_name}</h2>
          <h4>Email: {email}</h4>
          {/* add a linkedin logo here */}
          <h4>LinkedIn: {linkedin}</h4> 
          <h4>Location: {geoLocation}</h4>
          <h4>Job Title: {job_title}</h4>
          <h4>Company: {company}</h4>
          <h4>Fields of Expertise: {fields.map(field => <h4>{field}</h4>)}</h4>
          <h4>Years of Experience: {years.map(year => <h4>{year}</h4>)}</h4>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default GuideDetails
