import React from 'react'

const GuideCard = ({ guide, handleClick }) => {
  const { first_name, last_name, job_title, company, profile_pic} = guide

  return (
    <div className="guide-card" key={ guide.id }>
      <div>
        <img className="guide-image" src={profile_pic} alt={first_name} />
        <h2 onClick={() => handleClick(guide)} style={{cursor: 'pointer'}}>Name: {first_name} {last_name}</h2>
        <h4>Job Title: {job_title}</h4>
        <h4>Company: {company}</h4>
      </div>
    </div>
  )
}

export default GuideCard
