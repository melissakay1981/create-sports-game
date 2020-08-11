import React from 'react';
import './App.css';
import Game from './game/Game';
import Bunny from './assets/bunny.png';
import Raccoons from './assets/raccoon.png'
import Squirrels from './assets/images (4).jpg'
import Hounds from './assets/images (5).jpg'

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Raccoons
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Squirrels
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Bunny
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Hounds
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}
export default App
