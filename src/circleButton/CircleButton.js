import React, { Component } from 'react'
import './circleButton.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class CircleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.spin = false
    this.spinDone = this.spinDone.bind(this)
  }
  componentDidMount() {
    const elm = this.button
    if (elm) {
      elm.addEventListener('animationend', this.spinDone)
    }
  }
  componentWillUnmount() {
    const elm = this.button
    elm.removeEventListener('animationend', this.spinDone)
  }
  spinDone() {
    this.setState({ spin: false })
  }
  render() {
    const spin = this.state.spin
    return (
      <div className="btn-circle-container col-md-2">
        <button
          onClick={() => this.setState({ spin: true })}
          className="btn btn-circle btn-primary"
        >
          <i
            aria-hidden="true"
            className={spin ? 'fa fa-comments spin' : 'fa fa-comments'}
          />
        </button>
      </div>
    )
  }
}

export default CircleButton
