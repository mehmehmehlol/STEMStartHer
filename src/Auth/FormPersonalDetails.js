import React, { Component } from 'react'
// Added new files -Alyssa
import progressbar3 from '../images/progress-bar-step-3.svg'
import './Form.css'

export default class FormPersonalDetails extends Component {
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
      <div className="form-personal-details">
        <form className="input-user-form">
          <div className="signup-header">
            <h1 className="heading">Almost there!</h1>
          </div>

          <div>
          <img className="progressbar3" alt="Step 3" src={progressbar3}/>
          </div>

          <h5 >Create a public profile, this is what guides see.</h5>

          <div className="input-details">
            <label>
              <p>First Name:</p>
              <input type="text" placeholder="First Name" value={values.first_name} onChange={handleChange('first_name')}/>
            </label>
            <br />
            <label>
              <p>Last Name:</p>
              <input type="text" placeholder="Last Name" value={values.last_name} onChange={handleChange('last_name')}/>
            </label>
            <br />
            <label>
              <p>Location:</p>
              <input type="text" placeholder="Location" value={values.location} onChange={handleChange('location')}/>
            </label>
            <label>
              <p>Highest Level of Education:</p>
              <select value={values.level_of_education} onChange={handleChange('level_of_education')}>
                <option value="High-School">High School</option>
                <option value="Associates-Degree">Associate's Degree</option>
                <option value="Bachelors-Degree">Bachelor's Degree</option>
                <option value="Masters">Masters</option>
                <option value="coding-bootcamp">Coding Bootcamp</option>
                <option value="others">Others</option>
              </select>
            </label>
            <label>
              <h4>Tell us a bit about yourself (Max 150 words):</h4>
              <p>
                <ul>
                  <li>What do you want to learn about?</li>
                  <li>What are you looking to gain from meeting your Guides?</li>
                  <li>Anything special your Guides should know?</li>
                </ul>
              </p>
              <input className="bio" type="textarea" placeholder="Tell us about yourself!" value={values.bio} onChange={handleChange('bio')}/>
            </label>
            </div>
            <div className="button-container">
            <button className="back-button" onClick={ this.back }>Previous</button>
            <button className="next-button" onClick={ this.continue }>Next</button>
            </div>
          </form>
      </div>
    )
  }
}