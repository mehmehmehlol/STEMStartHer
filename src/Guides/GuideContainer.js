import React from 'react'
// import SubjectFilter from '../Filter/SubjectFilter'
import './Guide.css';
import GuidesDisplay from './GuideDisplay'
import RandomGuidesGenerator from '../RandomGuidesGenerator'
import Filter from '../Filter/Filter'
import { Button } from 'react-bootstrap';

const GuidesContainer = ({ guides }) => {
  return (
    <div className="guide-container">
      <div className="recommended-guides">
        <div className="wrapper"><h1>Recommended Guides</h1></div>
        <RandomGuidesGenerator guides={ guides } />
      </div>
      
      <div className="search-guides">
        <div className="filter-wrapper">
          <h2>Find the Right Guide for You</h2>
          <Filter /> <Button className="btn-green">Search</Button>
        </div> 
        <div className="display-guides">
          <div className="display-guides-wrapper">
            <GuidesDisplay guides={ guides } />
          </div>
        </div>     
      </div>
    </div>
  )
}
  

export default GuidesContainer
