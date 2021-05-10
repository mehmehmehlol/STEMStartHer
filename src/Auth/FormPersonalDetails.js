import React, { Component } from 'react'

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
      <div>
          <div className="signup-header">
            <h1>Almost there!</h1>
          </div>

          <div>
            {/* I assume the circle thing is gonna go here */}
          </div>

          <h5>Create a public profile, this is what guides see.</h5>

          <form>
            <label>
              First Name:
              <input type="text" placeholder="First Name" value={values.first_name} onChange={handleChange('first_name')}/>
            </label>
            <br />
            <label>
              Last Name:
              <input type="text" placeholder="Last Name" value={values.last_name} onChange={handleChange('last_name')}/>
            </label>
            <br />
            <label>
              Location:
              <input type="text" placeholder="Location" value={values.location} onChange={handleChange('location')}/>
            </label>
            <label>
              Highest Level of Education:
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
              <input type="textarea" placeholder="Tell us about yourself!" value={values.bio} onChange={handleChange('bio')}/>
            </label>

            <button className="back-button" onClick={ this.back }>Previous</button>
            <button className="next-button" onClick={ this.continue }>Next</button>
          </form>
      </div>
    )
  }
}