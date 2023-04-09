import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css'

function App() {

  const [toggle, setToggle] = React.useState(false); 

  const clickHandler = () => {
    setToggle(!toggle);
  }

  React.useEffect( () => {
   document.title =  toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  }, [toggle]);

  return (
    <div className="App">
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler} >
        Toggle message
      </button>
      {toggle && <h2>Welcome to Little Lemon</h2>}
    </div>
  )
}

export default App
