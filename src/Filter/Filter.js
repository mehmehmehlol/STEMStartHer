import React from 'react'
import SubjectFilter from './SubjectFilter'

class Filter extends React.Component {
  state = {
    filtered: "all"
  }

  selectFilter = (filtered) => {
    this.setState({ filtered })
  }

  render() {
    return (
      <div>
        <SubjectFilter selectFilter={this.selectFilter} />
      </div>
    )
  }
}

export default Filter
