import React, { PropTypes } from 'react'
import './ChatButton.scss'

const ChatButton = ({ toggleOpenState, isOpen }) => (
  <div className="chat-button">
    <button
      onClick={toggleOpenState}
      className={'p-4 btn btn-circle btn-primary'}
    >
      <div className={`button-icon-container ${isOpen ? 'open' : 'closed'}`}>
        <div className="button-icon">
          <i
            aria-hidden="true"
            className={`icon ${isOpen ? 'open' : ''}`}
          />
        </div>
      </div>
    </button>
  </div>
)


ChatButton.propTypes = {
  toggleOpenState: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default ChatButton
