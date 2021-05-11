import React from 'react'
// import SubjectFilter from '../Filter/SubjectFilter'
import GuidesDisplay from './GuideDisplay'
import RandomGuidesGenerator from '../RandomGuidesGenerator'
import Filter from '../Filter/Filter'

const GuidesContainer = ({ guides }) => {
  return (
    <div className="guide-container">
      <div className="recommended-guides">
        <h1>Recommended Guides</h1>
        <RandomGuidesGenerator guides={ guides } />
      </div>
      
      <div className="search-guides">
        <Filter />
        <GuidesDisplay guides={ guides } />
      </div>
    </div>
  )
}
  

export default GuidesContainer
