import React, { Component } from 'react'

import Chat from './chat'
import ChatButton from './chatButton'

class App extends Component {
  constructor(props) {
    super(props)
    this.toggleOpenState = this.toggleOpenState.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggleOpenState() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
            <div className="py-5">
              <Chat isOpen={isOpen} />
            </div>
            <div className="p-5">
              <ChatButton toggleOpenState={this.toggleOpenState} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
