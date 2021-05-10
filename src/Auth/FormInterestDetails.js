import React, { Component } from 'react'
import Select from 'react-select'
import interestList from '../interest_data.json'
import { Link } from 'react-router-dom'

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
              value={ selectedOption }
              isMulti
              name="subject"
              options={ searchList }
              onChange={ this.handleSelect }
              placeholder="Search for your subject of interest"
              className="basic-multi-select"
            />
          </div>
          <button onClick={() => {handleSignup()}}><Link to="/welcome">Sign Up!</Link></button>
      </div>
    )
  }
}