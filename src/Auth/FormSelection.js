import React from 'react'
import './Form.css'
import progressbar1 from '../images/progress-bar-step-1.svg'

class FormSelection extends React.Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    return (
      
    
    <div className="form-selection">
      <form id="signup-form">
        <div className="signup-header">
          <h1 className="heading">Welcome to STEMStartHer!</h1>
        </div>
        <img className="progressbar1" alt="Step 1" src={progressbar1}/>
        <div className="signup-content">
          <h1>Choose Your Path</h1>
  
          <div className="grid-container">
          <div className="signup-explorer" onClick={() => {this.props.chooseExplorer()}} style={{ cursor: "pointer"}}>
          <div className="signup-text" style={{ cursor: "pointer"}}>
            <h1>Sign up as an Explorer</h1>
            <p>Get guidance from professionals in the field and get your career questions answered.</p>
            </div>
          </div>
  
          <div className="signup-guide">
            <div className="signup-text" style={{ cursor: "pointer"}}>
            <h1>Sign up as a Guide</h1>
            <p>Provide guidance for the next generation by lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          </div>
  
          <h5>Explorers can browse through our database of guides and choose who they would like to have a short call with</h5>
          <button className="next-button button blue" onClick={this.next}>Next</button>
        </div>
        </form>
        </div>
      
    )
  } 
}

export default FormSelection
