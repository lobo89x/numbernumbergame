// import React from 'react';
// import Tetris from './components/Tetris';

// import { useGameStatus } from './hooks/useGameStatus'
// import { correctAns, evaluate } from './hooks/useStage'
import React, { Component } from "react";
import Board from '../board';
// import logo from './logo.svg';
// import Card from './components/card'
import './App.css';

const cards = [
  {
    desc: "Mutiples of 2",
    criteria: (x) =>{
      if ((x % 2) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  },
  {
    desc: "Mutiples of 3",
    criteria: (x) =>{
      if ((x % 3) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  },
  {
    desc: "Multiples of 5",
    criteria: (x) =>{
      if ((x % 5) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  },
  {
    desc: "Multiples of 7",
    criteria: (x) =>{
      if ((x % 7) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  },
  {
    desc: "Multiples of 13",
    criteria: (x) =>{
      if ((x % 13) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  },
  {
    desc: "Factors of 144",
    criteria: (x) =>{
      if ((144 % x) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  },
  {
    desc: "Factors of 338",
    criteria: (x) =>{
      if ((338 % x) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  },
  {
    desc: "Factors of 385",
    criteria: (x) =>{
      if ((385 % x) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  },
  {
    desc: "Factors of 378",
    criteria: (x) =>{
      if ((378 % x) === 0){
        return true;
      }
      else{
        return false;
      }
    },
  }
];


class Game extends Component {
  state = {
    score: 0,
    lives: 3,
    gameOver: false,
    level: 0
  };
  // const Game = () => {
    addScore = (correctAns) => {
      // console.log("here i am");
      this.setState({
        score: this.state.score + (correctAns*25)
      })
      console.log(this.state.score);
    };

    wrong = () => {
      this.setState({
        lives: this.state.lives - 1 
      })
      // console.log("im here");
    }

    nextLevel = () => {
      // console.log("here i am");
      this.setState({
        level: this.state.level + 1
      })
      // console.log(this.state.level);
    };

    zeroLevel = () => {
      // console.log("here i am");
      this.setState({
        level: 0,
        lives: 3,
        score: 0
      })
      // console.log(this.state.level);
    };

// const [gameOver, setGameOver] = useState(false);
// const [score, setScore] = useState(0);

// //hooks
// const [score] = useGameStatus(
//     correctAns
// );
// const [correctAns, setCorrectAns, evaluate] = useStage() ;

// const startGame = () => {
    
// }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>NUMBERNAUTS</h2>
        </div>
        <p className="App-intro">
        {cards[this.state.level].desc}
        </p>
        <h6>Your Score is::  {this.state.score}</h6>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 text-center">
              Number of lives:: {this.state.lives}
            </div>
            <div className="col-lg-6 text-center">
                <div className="card-deck">
                    <Board 
                    score={this.state.score}
                    wrong={this.wrong} 
                    lives={this.state.lives} 
                    addScore={this.addScore} 
                    cards={cards[this.state.level]} 
                    nextLevel={this.nextLevel}
                    zeroLevel={this.zeroLevel}/>
                </div>
            </div>
            <div className="col-lg-3 text-center"></div>
          </div>
        </div>

      </div>
    );
  }
}



export default Game;

