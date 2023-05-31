import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './containers/Header/Header'
import Header2 from './containers/Header2/Header2'
import ClassCom from './components/ClassCom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <Xyz/> */}
    <Header />
    {/* <Header2 /> */}
  </React.StrictMode>,
)
