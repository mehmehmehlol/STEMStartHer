import React from 'react'
import SubjectFilter from '../Filter/SubjectFilter'
import GuidesDisplay from './GuideDisplay'

const GuidesContainer = ({ guides }) => {
  return (
    <div className="guide-container">
      <div className="recommended-guides">
        {/* import random guides generator here */}
      </div>
      <div className="search-guides">
        {/* <SubjectFilter /> */}
        <GuidesDisplay guides={ guides } />
      </div>
    </div>
  )
}
  

export default GuidesContainer
