import React, { PropTypes } from 'react'
import './ChatButton.scss'

const ChatButton = ({ toggleOpenState, isOpen }) => (
  <div className="col-md-2">
    <button
      onClick={toggleOpenState}
      className={`btn btn-circle btn-primary ${isOpen ? 'open' : ''}`}
    >
      <i
        aria-hidden="true"
        className="fa fa-comments fa-2x icon-open"
      />
      <i
        aria-hidden="true"
        className="fa fa-times fa-2x icon-close"
      />
    </button>
  </div>
)


ChatButton.propTypes = {
  toggleOpenState: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default ChatButton
