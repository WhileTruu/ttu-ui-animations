import React, { Component, PropTypes } from 'react'

import './MessageComposer.scss'

class MessageComposer extends Component {
  constructor(props) {
    super(props)
    this.onMessageChange = this.onMessageChange.bind(this)
    this.state = {
      message: '',
    }
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
    this.textInput.style.height = 'auto'
    this.textInput.style.height = `${Math.min(this.textInput.scrollHeight, 150)}px`
    this.textInput.scrollTop = this.textInput.scrollHeight
    this.props.changeComposerHeight(this.textInput.scrollHeight)
    // TODO: See if this actually solves a potential page scrolling problem with a lot of text.
    // Might not even appear in our case due to the limited textarea height.
    window.scrollTo(window.scrollLeft, (this.textInput.scrollTop + this.textInput.scrollHeight))
  }

  render() {
    return (
      <div>
        <textarea
          className="form-control message-composer-input p-3"
          rows="1"
          ref={(input) => { this.textInput = input }}
          placeholder="Send a message..."
          onChange={this.onMessageChange}
        />
      </div>
    )
  }
}

MessageComposer.propTypes = {
  changeComposerHeight: PropTypes.func.isRequired,
}

export default MessageComposer
