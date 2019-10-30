// import React from 'react';
// import Tetris from './components/Tetris';

import { useGameStatus } from '../../hooks/useGameStatus'
import { correctAns, evaluate } from '../../hooks/useStage'
import React, { Component, useState } from 'react';
import Board from '../board';
// import logo from './logo.svg';
// import Card from './components/card'
import './../../App.css';




const cards = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
  {
    id: 4,
    name: "4",
  },
  {
    id: 5,
    name: "5",
  },
  {
    id: 6,
    name: "6",
  },
  {
    id: 7,
    name: "7",
  },
  {
    id: 8,
    name: "8",
  },
  {
    id: 9,
    name: "9",
  }
];

// const fxn = [
//   {desc: "multiple of 2",
//     fxn: pick%2,
//   },
//   {desc: "multiple of 3",
//     fxn: pick%3,
//   },
//   {desc: "multiple of 13",
//     fxn: pick%13
//   },
//   {desc: "multiple of 5",
//     fxn: pick%5,
//   },
//   {desc: "multiple of 7",
//     fxn: pick%7,
//   }
// ];


// const [score, setScore, useGameStatus] = useGameStatus(
//     correctAns
// );
function updatescore(gl) {
  this.setState( { score: gl.length }, () => {
    console.log(this.state.score);
});
}

// class Game extends Component {
const Game = () => {
//   state = {
//     score: 0,
//     gameOver: false,
//   };

// const [gameOver, setGameOver] = useState(false);
// const [score, setScore] = useState(0);

// //hooks
// const [score] = useGameStatus(
//     correctAns
// );
// const [correctAns, setCorrectAns, evaluate] = useStage() ;

// const startGame = () => {
    
// }

//   render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Memory Game</h2>
        </div>
        <p className="App-intro">
          Find the multiples of 2!!!!
        </p>
        {/* <h6>Your Score is::  {score}</h6> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3 text-center"></div>
            <div className="col-lg-6 text-center">
                <div className="card-deck">
                    <Board scoreupdate={updatescore} cards={cards}/>
                </div>
            </div>
            <div className="col-lg-3 text-center"></div>
          </div>
        </div>

      </div>
    );
//   }
}

export default Game;

