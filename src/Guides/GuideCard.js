import React from 'react'
import { Link } from 'react-router-dom'

const GuideCard = ({ guides }) => {
  return (
    <>
      { guides.map(guide => (
        // console.log(guide)
        <div key={ guide.id }>
          <div className="guide-profile-pic">
            <img className="guide-image" src={guide.profile_pic} alt={guide.first_name} />
          </div>

          <div className="guide-info">
            <h4><Link to={`/guides/${guide.first_name}`}>{guide.first_name} {guide.last_name}</Link>,</h4>
            <h4>{guide.job_title}</h4>
            <h4>At {guide.company} in { guide.geolocation }</h4>
            <br />
          </div>

          <div className="guide-years-fields-experience">
            <h4>Experience: {guide.fields_of_expertise.map(field => <h4>{field}</h4>)}</h4>
            <h4>Years: {guide.years_of_experience.map(year => <h4>{year}</h4>)}</h4>
          </div>
        </div>
      ))}
    </>
  )
}

export default GuideCard
