import React from 'react'

import Chat from './chat'
import CircleButton from './circleButton/CircleButton'

import logo from './logo.svg'
import './App.scss'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="row">
      <div className="col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
        <Chat />
        <CircleButton />
      </div>
    </div>
  </div>
)

export default App
