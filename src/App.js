import React from 'react'
import { connect } from 'react-redux'
import './App.css'


class App extends React.Component {
  render() {
    const { stage } = this.props
    return (
      <div className="container-fluid align-items-center col-12 col-sm-10 col-md-8	col-lg-6 col-xl-5">
        
      </div>
    )
  }
}

export default connect(state => {
  return {
    stage: state.stage,
    information: state.information,
  }
})(App)
