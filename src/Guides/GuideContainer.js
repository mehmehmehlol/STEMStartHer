import React from 'react'
import GuidesDisplay from './GuideDisplay'

const GuidesContainer = ({ guides }) => {
  return (
    <div className="guide-container">
      <GuidesDisplay guides={ guides } />
    </div>
  )
}
  

export default GuidesContainer
