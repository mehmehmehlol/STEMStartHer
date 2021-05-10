import React, { Component } from 'react'

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
      <div>
          <div className="signup-header">
            <h1>Next Step!</h1>
          </div>

          <div>
            {/* I assume the circle thing is gonna go here */}
          </div>

          <h5>Let's continue with the basics!</h5>

          <form>
            <label>
              Email:
              <input type="text" placeholder="email" value={values.email} onChange={handleChange('email')}/>
            </label>
            <br />
            <label>
              Password:
              <input type="password" placeholder="password" value={values.password} onChange={handleChange('password')}/>
            </label>
            <br />
            <label>
              Confirm Password:
              <input type="password" placeholder="confirm password" value={values.confirm_password} onChange={handleChange('confirm_password')}/>
            </label>
            <p>By signing up for ExplorHER, you agree to our Terms of Service and Privacy Policy.</p>

            <button className="back-button" onClick={ this.back }>Previous</button>
            <button className="next-button" onClick={ this.continue }>Next</button>
          </form>
      </div>
    )
  }
}
