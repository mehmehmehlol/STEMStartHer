import React from 'react'
import { Link } from 'react-router-dom'

const GuidesDisplay = ({ guides }) => {
  // console.log(guides)
  return (
    <div>
      <h1>Our Guides</h1>
      <>
        { guides.map(guide => (
          <div key={ guide.id }>
            <img className="guide-image" src={guide.profile_pic} alt={guide.first_name} />
            <h4>Name: <Link to={`/guides/${guide.first_name}`}>{guide.first_name} {guide.last_name}</Link></h4>
            <h4>Job Title: {guide.job_title}</h4>
            <h4>Company: {guide.company}</h4>
          </div>
        ))}
      </>
    </div>
  )
}

export default GuidesDisplay
