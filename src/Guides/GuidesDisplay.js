import React from 'react'
import GuideCard from './GuideCard'

const GuidesDisplay = ({ guides }) => {
  return (
    <div>
      <h1>Our Guides</h1>
      <div className="guides-container">
        { guides.map(guide => {
          console.log(guide)
          return(
            <GuideCard 
              key={ guide.id }
              guide= {guide }/>
          )
        })}
      </div>
    </div>
  )
}

export default GuidesDisplay
