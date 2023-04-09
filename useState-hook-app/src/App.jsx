import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [restaurantName, setrestaurantName] = useState("Lemon"); 
  console.log(restaurantName); 

  function updateResturantName() {
    setrestaurantName("Little Lemon"); 
  };

  return (
    <div className="App">
        <h1>{restaurantName}</h1>
        <button onClick={updateResturantName}>
              Update restaurant name
        </button>
    </div>
  );
};




export default App; 
