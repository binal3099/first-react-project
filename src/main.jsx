import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import Xyz from './Xyz.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Xyz/>
  </React.StrictMode>,
)
