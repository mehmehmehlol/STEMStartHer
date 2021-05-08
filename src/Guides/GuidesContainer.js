import React from 'react'
import { Route } from 'react-router-dom'
import GuideDetails from './GuideDetails'
import GuidesDisplay from './GuidesDisplay'

class Guides extends React.Component {
  state = {
    guides: [],
    chosenGuide: null
  }

  // fetch guides 
  componentDidMount() {
    fetch('http://localhost:3000/guides')
    .then(res => res.json())
    .then(guides => {
      // debugger
      this.setState({ guides })
    })
  }

  displayGuideInfo = (guide) => {
    this.setState({ chosenGuide: this.state.guides.find(g => g === guide)})
  }

  render() {
    const { guides } = this.state;

    return (
      <div>
        {!this.state.chosenGuide ?
          <GuidesDisplay 
            guides={ guides }
            displayGuideInfo={ this.displayGuideInfo }
          />
          :
          <Route path="/guide/:first_name">
            <GuideDetails selected={this.state.chosenGuide}/>
          </Route>
        }
        
      </div>
    )
  }
  
}

export default Guides
