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
      messages: [
        {
          data: 'yolo',
          timeStamp: 121,
          author: 2,
          recipient: 1,
        },
        {
          data: 'yolo2',
          timeStamp: 122,
          author: 2,
          recipient: 1,
        },
        {
          data: 'yolo3',
          timeStamp: 123,
          author: 2,
          recipient: 1,
        },
        {
          data: 'yolo4',
          timeStamp: 124,
          author: 2,
          recipient: 1,
        },
      ],
    }
  }

  changeComposerHeight(composerHeight) {
    this.setState({ composerHeight })
  }

  render() {
    const { isOpen } = this.props
    const { messages } = this.state
    return (
      <div className="chat-container" style={{ position: 'absolute' }}>
        <div className={`chat-frame ${isOpen ? '' : 'hidden'}`}>
          <div className="chat-components-container">
            <MessageArea
              messages={messages}
              composerHeight={this.state.composerHeight}
            />
            <MessageComposer
              isOpen={isOpen}
              changeComposerHeight={this.changeComposerHeight}
            />
          </div>
        </div>
      </div>
    )
  }
}

Chat.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default Chat
