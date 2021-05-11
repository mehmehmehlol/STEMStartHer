import React from 'react'
import { Link } from 'react-router-dom'

const RandomGuidesGenerator = ({ guides }) => {
  const randFour = () => {
    const random = [];
    while (random.length < 4) {
      let rand = guides[Math.floor(Math.random() * guides.length)]
      if (!random.includes(rand)) {
        random.push(rand);
      }
    }
    return random;
  }

  return (
    <div className="container-fluid guide-cards">
      {
        randFour().map((guide) => (
          // console.log(guide)
          <div className="row mb-4 p-4" key={ guide.id }>
            <div className="col md-3">
              <div className="card">
                <img src={ guide.profile_pic } alt={ guide.id }/>
                <div className="card-body">
                  <h4 classname="card-title"><Link to={`/guides/${guide.first_name}`}>{guide.first_name} {guide.last_name}</Link></h4>
                  <h5 className="card-text">{ guide.job_title }</h5>
                  <h5 className="card-text">at {guide.company}</h5>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RandomGuidesGenerator
