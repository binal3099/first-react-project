import { useState } from 'react'
import reactLogo from './assets/react.svg'
import images from './assets/images/download.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <img src={images} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <div>
        <img src={images} alt="img" />
        <h1>Hello React Js</h1>
        <h4>
          My name is Binal.
          I come from surat.
          I have compeleted my course which is Javascript, c++, Wordpress, Boostrape, Css, Html.
          My running course is React Js.
        </h4>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
