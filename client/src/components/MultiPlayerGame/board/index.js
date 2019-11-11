import Grid from '../grid';
import React, { Component } from "react";
import Modal from "../Modal"

class Board extends Component {
  state = {
    guesslist: [],
    correctAns: 0
  };
  
  componentDidMount() {
 
  }

  render() {
    if (this.props.cardlist.length !== 0) {
      return (
        <div
          style={{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '20px auto'
          }}>
          <Grid 
          currentplayer={this.props.currentplayer}
          socket={this.props.socket}
          show={this.props.show} 
          criteria={this.props.cards.criteria} 
          score={this.props.score} 
          cardlist={this.props.cardlist} />
          {/* <Player /> */}
          <Modal 
          show={this.props.show} 
          lives={this.props.lives} 
          score={this.props.score} 
          correctAns={this.props.correctAns} 
          closeModal={this.props.closeModal} 
          gameOverModal={this.props.gameOverModal} />
        </div>
      )
    }
    else {
      return (
        <div className='card-group'>
          <h2> LOADING.........
            </h2>
        </div>
      );
    }
  }
}

export default Board