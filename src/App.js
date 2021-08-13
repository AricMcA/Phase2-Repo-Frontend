import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import TakeForm from "./components/TakeFrom";
import TakeList from "./components/TakeList" 
import Home from "./components/Home";



function App() {

  const [ takes, setTakes ] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3001/takes')
      .then(resp => resp.json())
      .then(takes => setTakes(takes))
  }, [])

  const addTake = (take, history) => {

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
        history.push('/takes')
      })
  }

  return (
    <div className="App">
      <Router>
        <NavBar />

          <Route exact path="/home" render={(props) => <Home /> } />
          <Route exact path="/takes" render={ (props) => <TakeList { ...props } takes={ takes } /> } />
          <Route exact path="/takes/new" render={ (props) => <TakeForm { ...props } addTake={ addTake } /> } />
          
        <footer>National Football League Debaters Co.</footer>
      </Router>
    </div>
  );
}

export default App;
