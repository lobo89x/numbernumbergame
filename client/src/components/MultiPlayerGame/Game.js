import React, { Component } from "react";
import Board from './board';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import './Game.css';


class MultiPlayerGame extends Component {
  state = {
    score: 0,
    lives: 3,
    correctAns: 0,
    gameOver: false,
    gameStart: true,
    level: 0,
    show: false,
    redirectTo: null
  };
  
  showModal = () => {
    console.log("running show modal");
    if (this.state.correctAns === 15) {
      this.setState({
        show: true
      })
    }
    if (this.state.lives < 1) {
      console.log("im on line 28")
      this.setState({
        show: true
      });

    }
    // console.log("I am here!");
    // console.log("dhow modal  "+this.state.show)
  };

  closeModal = e => {
    this.setState({show: false, redirectTo: "/lobby"});
  }

  gameOverModal = e => {
    
  }

  componentDidMount() {
    if (!this.props.user || !this.props.socket){
        this.setState({redirectTo: "/login"});
    }
    else {
      let socket = this.props.socket;

      if (this.props.user) {
        socket.emit("gameReady", this.props.user);
      }
      // emittable events 
      //playerMove  - emit this after the player moves
      //boardUpdate - emit this after the player munches

      this.props.socket.on("bothPlayersReady", () => {
        // triggered when both players have loaded this component
        // should trigger the countdown to begin the game?
        setTimeout(()=>{
          this.setState({gameStart: false})
        }, 500);
      });

      this.props.socket.on("playerUpdated", data => {
        //data will be the new game data {board: [], crit: {}, players: []}
        // triggered when the other player moves should update store with new info
        console.log(data);
        this.props.dispatch({
          type: 'UPDATE_GAME',
          payload: data
        })
      });

      this.props.socket.on("boardUpdated", data => {
        //data will be the new game data {board: [], crit: {}, players: []}
        // triggers after another player updates the board should update store with new info
        console.log(data)
        this.props.dispatch({
          type: 'UPDATE_GAME',
          payload: data
        })
      });

      this.props.socket.on("gameDone", data => {
        //data will be the new game data {board: [], crit: {}, players: []}
        // triggers if the board has no numbers left that match the criteria 
      });
      
      this.props.socket.on("kicked", data =>{
        this.setState({redirectTo: "/lobby"});
      })
    }


  }

  render() {
    return (
      <div className="Game">
        {this.state.redirectTo !== null ? (
          <Redirect to={this.state.redirectTo} />
        ) : (
            <React.Fragment>
              <div className="Game-intro">
                <h3>{this.props.criteria.desc}</h3>

                <h6>Your Score is::  {this.state.score}</h6>
                <h5>Number of lives:: {this.state.lives}</h5>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center game-row-center">
                    <div className="card-deck">
                      {this.props.board ?
                        <Board
                          currentplayer={this.props.user}
                          socket={this.props.socket}
                          show={this.state.show}
                          correctAns={this.state.correctAns}
                          selectEval={this.selectEval}
                          answerList={this.answerList}
                          cardlist={this.props.board}
                          score={this.state.score}
                          wrong={this.wrong}
                          lives={this.state.lives}
                          addScore={this.addScore}
                          cards={[]}
                          nextLevel={this.nextLevel}
                          zeroLevel={this.zeroLevel}
                          closeModal={this.closeModal}
                          gameOverModal={this.gameOverModal} 
                          gameStart ={this.state.gameStart}/>
                        : ""}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.GameState
  }
}


export default connect(mapStateToProps)(MultiPlayerGame);

