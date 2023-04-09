import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [greeting, setGreeting] = useState({greet: "Hello, World"}); 
  console.log(greeting, setGreeting); 

  function updateGreeting() {
      const newGreeting = {...greeting}; 
      newGreeting.greet = "Hello, World-Wide Web"; 
      setGreeting(newGreeting); 

  }

  return (
    <div className="App">
        <h1>{greeting.greet}</h1>
        <button onClick={updateGreeting} >Update greeting</button>
    </div>
  );
}

export default App
