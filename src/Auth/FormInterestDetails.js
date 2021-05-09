import React, { Component } from 'react'
import Select from 'react-select'

const interest = [ "Statistics", "Calculus", "Biology", "Chemistry", "Physics", "Environmental", "Geology", "Electrical", "Mechanical", "Civil", "Design", "Software", "Nanotech", "Data Science", "Machine Learning/AI", "VR", "Web Development", "UI/UX"]

export default class FormInterestDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
          <div className="signup-header">
            <h1>Last Step</h1>
          </div>

          <div>
            {/* I assume the circle thing is gonna go here */}
          </div>

          <h5>What career areas are you interested in?</h5>

          <div className="interest-select">
            <Select 

            />
          </div>
      </div>
    )
  }
}