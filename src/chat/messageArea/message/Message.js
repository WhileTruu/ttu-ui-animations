import React, { PropTypes } from 'react'

const Message = ({ isOwnMessage, message }) => (
  <div className={`message ${isOwnMessage ? 'own-message' : ''}`}>{message}</div>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isOwnMessage: PropTypes.bool.isRequired,
}

export default Message
