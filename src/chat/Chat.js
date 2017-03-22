import React from 'react'

import MessageComposer from './messageComposer'
import MessageArea from './messageArea'

const App = () => (
  <div className="col-6 offset-3">
    <div className="card">
      <div className="card-block p-0">
        <MessageArea />
        <MessageComposer />
      </div>
    </div>
  </div>
)

export default App
