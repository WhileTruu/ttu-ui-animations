import React, { Component, PropTypes } from 'react'

import Message from './message'

import './MessageArea.scss'

class MessageArea extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.composerHeight === nextProps.composerHeight) return
    const composerHeight = nextProps.composerHeight || 0
    this.messageArea.style.paddingBottom = `${Math.min(composerHeight, 150)}px`
  }

  render() {
    const { messages } = this.props
    return (
      <div
        className="message-area px-3 pt-3"
        style={{ paddingBottom: '52px' }}
        ref={(input) => { this.messageArea = input }}
      >
        {messages ? messages.map(message => (
          <Message message={message} />
        )) : ''}
      </div>
    )
  }
}

MessageArea.propTypes = {
  composerHeight: PropTypes.number,
  messages: PropTypes.arrayOf(PropTypes.object),
}

MessageArea.defaultProps = {
  composerHeight: null,
  messages: null,
}

export default MessageArea
