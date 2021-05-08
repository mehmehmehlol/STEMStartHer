import React from 'react'
import GuideCard from './GuideCard'

const GuidesDisplay = ({ guides }) => {
  // console.log(guides)
  return (
    <div>
      <h1>Our Guides</h1>
      <GuideCard guides={ guides } />
    </div>
  )
}

export default GuidesDisplay
