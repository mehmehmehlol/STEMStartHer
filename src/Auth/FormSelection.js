import React from 'react'
// Added new files -Alyssa
import '../styles/FormSelection.css'
import progressbar1 from '../images/progress-bar-step-1.svg'

class FormSelection extends React.Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    return (
      
    <form id="signup-form">
      <div>
        <div className="signup-header">
          <h1 className="heading">Welcome to ExplorHer!</h1>
        </div>
        <img className="progressbar1" alt="Step 1" src={progressbar1}/>
        <div className="signup-content">
          <h1>Choose Your Path</h1>
  
          {/* Added id="box" to signup explorer and guide */}
          <div className="grid-container">
          <div className="signup-explorer" id="box" onClick={() => {this.props.chooseExplorer()}}>
            <h1>Sign up as an Explorer</h1>
            <p>Get guidance from professionals in the field and get your career questions answered.</p>
          </div>
  
          <div className="signup-guide" id="box">
            <h1>Sign up as a Guide</h1>
            <p>Provide guidance for the next generation by lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
  
          <h5>Explorers can browse through our database of guides and choose who they would like to have a short call with</h5>
          <button className="next-button" onClick={this.next}>Next</button>
        </div>
        </div>
      </form>
    )
  } 
}

export default FormSelection
