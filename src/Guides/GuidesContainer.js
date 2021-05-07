import React from 'react'
import GuidesDisplay from './GuidesDisplay'

class Guides extends React.Component {
  state = {
    guides: []
  }

  // fetch guides 
  componentDidMount() {
    fetch('http://localhost:3000/guides')
    .then(res => res.json())
    .then(guides => {
      debugger
      this.setState({ guides })
    })
  }

  render() {
    const { guides } = this.state;

    return (
      <div>
        <GuidesDisplay guides={ guides }/>
      </div>
    )
  }
  
}

export default Guides
