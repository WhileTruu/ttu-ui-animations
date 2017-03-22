import React from 'react'
import './circleButton.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const CircleButton = () => (
  <div className="circleButton">
    <button className="btn btn-circle btn-primary">
      <i className="fa fa-comments" aria-hidden="true" />
    </button>
  </div>
)

export default CircleButton
