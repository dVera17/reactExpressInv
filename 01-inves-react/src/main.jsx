import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatRoom from './componentDidMount/ChatRoom'
import App from './componentDidMount/app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <ChatRoom></ChatRoom>
  </React.StrictMode>,
)
