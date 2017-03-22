import React from 'react'

import MessageComposer from './messageComposer'
import MessageArea from './messageArea'

const App = () => (
  <div>
    <button />
    <div className="card w-75">
      <div className="card-block">
        <h4 className="card-title">Card title</h4>
        <MessageArea />
        <MessageComposer />
      </div>
    </div>
  </div>
)

export default App
