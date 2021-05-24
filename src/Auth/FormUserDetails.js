import React, { Component } from 'react'
import './Form.css'
import progressbar2 from '../images/progress-bar-step-2.svg'
import quicklinks from '../images/quick-sign-up.svg'
import line from '../images/line.svg'


export default class FormUserDetails extends Component {
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
      <div className="form-user-details">

          <form className="input-user-form">

          <div className="signup-header">
            <h1 className="heading">Next Step!</h1>
          </div>

          <div>
          <img className="progressbar2" alt="Step 2" src={progressbar2}/>
          </div>

          <h5>Let's continue with the basics!</h5>

          <div className="grid-container">
          <img className="quicklinks" alt="quick-sign-up" src={quicklinks}/> 
          <img className="line" alt="line" src={line}/> 

          <div className="input-details">
            <label>
              <p>Email:</p>
              <input type="text" placeholder="email" value={values.email} onChange={handleChange('email')}/>
            </label>
            <br />
            <label>
              <p>Password:</p>
              <input type="password" placeholder="password" value={values.password} onChange={handleChange('password')}/>
            </label>
            <br />
            <label>
            <p>Confirm Password:</p>
              <input type="password" placeholder="confirm password" value={values.confirm_password} onChange={handleChange('confirm_password')}/>
            </label>
            <p>By signing up for STEMStartHer, you agree to our Terms of Service and Privacy Policy.</p>

            </div>
            </div>
            
            <div className="button-container">
            <button className="back-button button blue" onClick={ this.back }>Previous</button>
            <button className="next-button button blue" onClick={ this.continue }>Next</button>
            </div>
          </form>
      </div>
    )
  }
}
