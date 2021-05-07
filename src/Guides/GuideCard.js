import React from 'react'

const GuideCard = ({ guide }) => {
  const { first_name, last_name, email, linkedin, geoLocation, job_title, company, bio, profile_pic} = guide
  const fields = guide.fields_of_expertise
  const years = guide.years_of_experience
  return (
    <div className="guide-card" key={ guide.id }>
      <div>
        <img className="guide-image" src={profile_pic} alt={first_name} />
        <h2>Name: {first_name} {last_name}</h2>
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
  )
}

export default GuideCard
