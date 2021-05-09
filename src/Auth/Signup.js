import React from 'react'
import FormSelection from './FormSelection';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'

class Signup extends React.Component {
  state = {
    step: 1,
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    location: "",
    level_of_education: "",
    bio: "",
    interests: "",
    explorer: false
  }

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1});
  }

  // Go back to the prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1});
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  // Choose Explorer
  chooseExplorer = () => {
    this.setState({ explorer: true })
  }

  render() {
    const { step } = this.state;
    const { email, password, confirm_password, first_name, last_name, location, level_of_education, bio, interests } = this.state;
    const values = { email, password, confirm_password, first_name, last_name, location, level_of_education, bio, interests }
    
    switch(step) {
      case 1:
        return (
          <FormSelection 
            chooseExplorer={ this.chooseExplorer } 
            nextStep={ this.nextStep }
          />
        )
      case 2: 
        return (
          <FormUserDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
        return (
          <FormPersonalDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 4: 
        return <h1>FormInterest</h1>    
      default:
        // do nothing
    }
    
  }
  
}

export default Signup
