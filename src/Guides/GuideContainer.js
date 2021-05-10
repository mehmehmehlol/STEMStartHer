import React from 'react'
import SubjectFilter from '../Filter/SubjectFilter'
import GuidesDisplay from './GuideDisplay'
import RandomGuidesGenerator from './RandomGuidesGenerator'

const GuidesContainer = ({ guides }) => {
  return (
    <div className="guide-container">
      <div className="recommended-guides">
        <h1>Recommended Guides</h1>
        <RandomGuidesGenerator guides={ guides } />
      </div>
      
      <div className="search-guides">
        {/* <SubjectFilter /> */}
        <GuidesDisplay guides={ guides } />
      </div>
    </div>
  )
}
  

export default GuidesContainer
