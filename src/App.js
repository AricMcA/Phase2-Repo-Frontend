import React, { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import TakeForm from "./components/TakeFrom";
import TakeList from "./components/TakeList" 


function App() {

  const [ takes, setTakes ] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3001/takes')
      .then(resp => resp.json())
      .then(takes => setTakes(takes))
  }, [])

  const addTake = (take) => {

    fetch('http://localhost:3001/takes', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( take )
    })
      .then(resp => resp.json())
      .then(take => {
        const newTakes = [...takes, take];
        setTakes(newTakes);
      })
  }

  return (
    <div className="App">
      <NavBar />

      <h1>Welcome to NFL Debater</h1>

      <TakeForm addTake={ addTake } />

      <TakeList takes={ takes } />

      <footer>National Football League Debaters Co.</footer>
    </div>
  );
}

export default App;
