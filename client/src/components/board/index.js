// import React from 'react'
import Grid from '../grid';
//import Player from '../player';

import React, { Component } from "react";
import Modal from "../Modal"




class Board extends Component {
  
  state = {
    guesslist: [],
    cardlist: [],
    correctAns: 0
  };
  
  
  // closeModal = e => {
  //   this.forceUpdate();
  //   this.props.nextLevel();
  //   // this.props.answerList();
  //   this.setState({ cardlist: this.props.cardlist }, () => {
  //     // console.log(this.props.cardlist);
  //   });
  // }

  // gameOverModal = e => {
  //   this.props.zeroLevel();
  //   this.setState({
  //     show: false,
  //     correctAns: 0,
      
  //   });
  //   this.forceUpdate();
  //   // this.props.answerList();
  //   this.setState({ cardlist: this.props.cardlist }, () => {
  //     // console.log(this.props.cardlist);
  //   });
  // }
  // addScore = (correctAns) => {
  //   // console.log("here i am");
  //   this.state.score = this.state.score + (correctAns*25);
  //   console.log(this.state.score);
  // };
  

// clearSpace(y){
//   this.props.cardlist[y] = '';
// }


  componentDidMount() {
    console.log("hey im here in board line 123");
    console.log(this.props.cards);
    // this.answerList();
    this.setState({ cardlist: this.props.cardlist }, () => {
          // console.log(this.props.cardlist);
      });
  }



  render() {
    console.log(this.props.cardlist);
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
          criteria={this.props.cards.criteria} 
          lives={this.props.lives} 
          score={this.props.score} 
          selectEval={this.props.selectEval} 
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