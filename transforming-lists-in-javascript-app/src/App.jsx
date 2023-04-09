import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
    "  npm create vite@latest "

*/

  // Creating a list of objects 

  const data = [
    {
      id: "1", 
      title: "Tiranisu", 
      description: "The best tiranmisu in town", 
      image: "https://picsum.photos/200/300/?random", 
      price: "$5.00", 
    }, 

    {
      id: "2", 
      title: "Lemon Ice Cream", 
      description: "Mind blowing taste", 
      image: "https://picsum.photos/200/300/?random", 
      price: "$4.50", 
    }, 
    {
      id: "3", 
      title: "Chocolate mousse", 
      description: "Unexplored flavour", 
      image: "https://picsum.photos/200/300/?random", 
      price: "$6.00", 
    }, 
  ]; 

  const topDesserts = data.map(dessert => {
    return {
      content: `${dessert.title} - ${dessert.description}`, 
      price: dessert.price, 
    }
  })

function App() {

  console.log(topDesserts); 
  
  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}` 
    // Note 1: There's a bug somewhere in this code, "dessert.title" is dispaying "undefined"
    // instead of showing the title from the list of objects, "data", above. 
    return <li>{itemText}</li>
  })


  return (
    <div className="App">
      {/* <h1>Examine the console output</h1>  */}
        <ul>
          {listItems}
        </ul>
    </div>
  )
}

export default App
