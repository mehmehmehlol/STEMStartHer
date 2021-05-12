import React, { Component } from 'react'
import Select from 'react-select'
import interestList from '../interest_data.json'
import { Link } from 'react-router-dom'
// Added new files -Alyssa
import progressbar4 from '../images/progress-bar-step-4.svg'
import './Form.css'

const searchList = interestList.map(
  ({ subject }) => {
    return {
      value: subject,
      label: subject
    }
  }
)

export default class FormInterestDetails extends Component {
  state = {
    selectedOption: null
  }
  // continue = e => {
  //   e.preventDefault();
  //   this.props.nextStep();
  // }

  handleSelect = selectedOption => {
    this.setState({ selectedOption })
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { selectedOption } = this.state;
    const { handleSignup } = this.props;
    return (
      <div className="form-interest-details">
          <div className="input-user-form">
          <div className="signup-header">
          <h1 className="heading">Last Step!</h1>
          </div>
          
          <div>
          <img className="progressbar4" alt="Step 4" src={progressbar4}/>
          </div>

          <h5>What career areas are you interested in?</h5>


          <div className="interest-select">
            <Select 
              value={ selectedOption }
              isMulti
              name="subject"
              options={ searchList }
              onChange={ this.handleSelect }
              placeholder="Search for your subject of interest"
              className="basic-multi-select"
            />

          </div>
          <div className="button-container">
          <button className="back-button" onClick={ this.back }>Previous</button>
          <button className="form-signup-button" onClick={() => {handleSignup()}}><Link to="/welcome">Sign Up</Link></button>
          </div>
          </div>
      </div>
    )
  }
}