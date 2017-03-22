import React, { PropTypes } from 'react'
import './ChatButton.scss'

const ChatButton = ({ toggleOpenState, isOpen }) => (
  <div className="col-md-2">
    <button
      onClick={toggleOpenState}
      className="btn btn-circle btn-primary"
    >
      <i
        aria-hidden="true"
        className={`fa fa-comments ${isOpen ? 'open' : ''}`}
      />
    </button>
  </div>
)


ChatButton.propTypes = {
  toggleOpenState: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default ChatButton
