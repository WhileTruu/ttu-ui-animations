import React, { Component, PropTypes } from 'react'

import MessageComposer from './messageComposer'
import MessageArea from './messageArea'

import './Chat.scss'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.changeComposerHeight = this.changeComposerHeight.bind(this)
    this.state = {
      composerHeight: null,
    }
  }

  changeComposerHeight(composerHeight) {
    this.setState({ composerHeight })
  }

  render() {
    const { isOpen } = this.props
    return (
      <div className={`chat-frame ${isOpen ? '' : 'hidden'}`}>
        <div className="chat-components-container">
          <MessageArea composerHeight={this.state.composerHeight} />
          <MessageComposer
            isOpen={isOpen}
            changeComposerHeight={this.changeComposerHeight}
          />
        </div>
      </div>
    )
  }
}

Chat.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default Chat
