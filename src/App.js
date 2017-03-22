import React from 'react'
import logo from './logo.svg'
import './App.css'
import CircleButton from './circleButton/CircleButton'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <CircleButton />

  </div>
)

export default App
