import React from 'react'
import { Link } from 'react-router-dom'

const RandomGuidesGenerator = ({ guides }) => {
  const randFour = () => {
    const random = [];
    while (random.length < 5) {
      let rand = guides[Math.floor(Math.random() * guides.length)]
      if (!random.includes(rand)) {
        random.push(rand);
      }
    }
    return random;
  }

  return (
    <div>
      {
        randFour().map((guide) => (
          // console.log(guide)
          <div key={ guide.id }>
            <img src={ guide.profile_pic } alt={ guide.id }/>
            <h4><Link to={`/guides/${guide.first_name}`}>{guide.first_name} {guide.last_name}</Link></h4>
            <h5>{ guide.job_title }</h5>
            <h5>at {guide.company}</h5>
          </div>
        ))
      }
    </div>
  )
}

export default RandomGuidesGenerator
