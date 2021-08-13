import React from 'react'
import nfl from '../pictures/nfl.jpeg'

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to NFL Debater</h1>
            <img src={ nfl } alt="NFL" className="picture" />
        </div>
    )
}

export default Home
