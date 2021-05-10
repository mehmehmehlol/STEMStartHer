import React from 'react'

class FormSelection extends React.Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    return (
      <div>
        <div className="signup-header">
          Welcome to ExplorHer!
        </div>
  
        <div className="signup-content">
          <h1>Choose Your Path</h1>
  
          {/* need to work on this part */}
          <div className="signup-explorer" onClick={() => {this.props.chooseExplorer()}}>
            <h1>Sign up as an Explorer</h1>
            <p>Get guidance from professionals in the field and get your career questions answered.</p>
          </div>
  
          <div className="signup-guide">
            <h1>Sign up as a Guide</h1>
            <p>Provide guidance for the next generation by lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
  
          <h5>Explorers can browse through our database of guides and choose who they would like to have a short call with</h5>
          <button className="next-button" onClick={this.next}>Next</button>
        </div>
      </div>
    )
  } 
}

export default FormSelection
