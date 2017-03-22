import React, { Component, PropTypes } from 'react'

import './MessageArea.scss'

class MessageArea extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.composerHeight === nextProps.composerHeight) return
    const composerHeight = nextProps.composerHeight || 0
    this.messageArea.style.marginBottom = `${Math.min(composerHeight, 150)}px`
  }

  render() {
    return (
      <div
        className="message-area p-3"
        style={{ marginBottom: '52px' }}
        ref={(input) => { this.messageArea = input }}
      >
        <div>asd</div>
      </div>
    )
  }
}

MessageArea.propTypes = {
  composerHeight: PropTypes.number,
}

MessageArea.defaultProps = {
  composerHeight: null,
}

export default MessageArea
