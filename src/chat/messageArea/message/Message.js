import React, { PropTypes } from 'react'

import './Message.scss'

// HACK: I don't have an id so I'll define one here.
const myId = 1

const Message = ({ message }) => (
  <div className="">
    <div className={`px-2 py-1 my-2 message ${message.author === myId ? 'own-message' : ''}`}>{message.data}</div>
  </div>
)

Message.propTypes = {
  message: PropTypes.shape({
    data: PropTypes.string,
    timeStamp: PropTypes.number,
    author: PropTypes.number,
    recipient: PropTypes.number,
  }).isRequired,
}

export default Message
