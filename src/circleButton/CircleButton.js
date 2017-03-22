import React from 'react'
import './circleButton.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const CircleButton = () => (
  <div className="btn-circle-container col-md-2">
    <button className="btn btn-circle btn-primary">
      <i className="fa fa-comments" aria-hidden="true" />
    </button>
  </div>
)

export default CircleButton
