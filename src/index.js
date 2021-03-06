import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './utils/registerServiceWorker'
import './css/index.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
