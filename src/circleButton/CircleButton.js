import React, { Component } from 'react'
import './circleButton.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class CircleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.spin = false
  }
  spinDone() {
    this.setState({ spin: !this.state.spin })
  }
  render() {
    return (
      <div className="btn-circle-container col-md-2">
        <button
          onClick={() => this.setState({ spin: true })}
          className="btn btn-circle btn-primary"
        >
          <i
            aria-hidden="true"
            className={this.state.spin ? 'fa fa-comments spin' : 'fa fa-comments'}
          />
        </button>
      </div>
    )
  }
}

export default CircleButton
