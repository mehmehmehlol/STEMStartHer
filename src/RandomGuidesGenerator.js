import React from 'react'
import { Link } from 'react-router-dom'


const RandomGuidesGenerator = ({ guides }) => {

  return (
      
      <div className="container-fluid guide-cards row mb-4 p-4">
        {
          guides.slice(0, 4).map((guide) => (

              <div key={ guide.id }>
                <div className="col md-3">
                  <div className="card" style={{ width: 300 }}>
                    <img className="card-img-top" src={ guide.profile_pic } alt={ guide.id } style={{ height: 400}}/>
                    <div className="card-body">
                      <h4 classname="card-title"><Link to={`/guides/${guide.first_name}`}>{guide.first_name} {guide.last_name}</Link></h4>
                      <h5 className="card-text">{ guide.job_title }</h5>
                      <h5 className="card-text"><small>at {guide.company}</small></h5>
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
