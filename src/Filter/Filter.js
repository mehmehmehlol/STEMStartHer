import React from 'react'
import SubjectFilter from './SubjectFilter'

class Filter extends React.Component {
  state = {
    filtered: "all"
  }

  // filter
  selectFilter = (filtered) => {
    // console.log(filtered)
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
