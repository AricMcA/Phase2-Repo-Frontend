import React from "react"
import NavBar from "./components/NavBar"
import TakeForm from "./components/TakeFrom";
import TakeList from "./components/TakeList";


const takes = [
  { user: "user1", player:"player1", content:"content1" },
  { user: "user2", player:"player2", content:"content2" },
  { user: "user3", player:"player3", content:"content3" },
  { user: "user4", player:"player4", content:"content4" },
  { user: "user5", player:"player5", content:"content5" }
]


function App() {
  return (
    <div className="App">
      <NavBar />

      <h1>Welcome to NFL Debater</h1>

      <TakeForm />

      <TakeList takes={ takes } />

      <footer>National Football League Debaters Co.</footer>
    </div>
  );
}

export default App;
