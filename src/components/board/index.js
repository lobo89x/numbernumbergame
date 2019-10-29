// import React from 'react'
import Grid from '../grid';
//import Player from '../player';

import React, { Component } from "react";
import Modal from "../Modal"




class Board extends Component {
  
  state = {
    guesslist: [],
    cardlist: [],
    correctAns: 0,
    lives: 3,
    score: 0,
    show: false
  };
  
  showModal = () => {
    if (this.state.correctAns===15){
      this.setState({
        show: true
      })
    }
    if (this.state.lives<1){
      this.setState({
        show: true
      });
     
    }
    // console.log("I am here!");
    // console.log("dhow modal  "+this.state.show)

  };

  closeModal = e => {
    this.setState({
      show: false
    });
  }
  addScore = (correctAns) => {
    // console.log("here i am");
    this.state.score = this.state.score + (correctAns*25);
    console.log(this.state.score);
  };
  
  selectEval = (x, tf, list) => {
    console.log("tf is this::  "+tf)
    if (tf) {
      this.state.correctAns++;
      console.log('#of right  '+this.state.correctAns)
      // scoreUpdate();
      this.addScore(this.state.correctAns);
    }
    else {
      this.state.lives--;
      console.log('#of lives left  '+this.state.lives);
      // lifeLoss();
    }
    this.setState(
      {cardlist: this.state.cardlist.map((item, index) =>
        {if (index===x){
          item = '';
        }
        return item;
      })
    }
    );
    this.showModal();
  }

// clearSpace(y){
//   this.state.cardlist[y] = '';
// }


  select = num => {
    if (this.state.guesslist.includes(num)) {

      this.setState({ guesslist: [] }, () => {
        console.log(this.state.guesslist);
        this.props.scoreupdate(this.state.guesslist)
      });
    }
    else {
      this.state.guesslist.push(num);
      console.log(this.state.guesslist);
      this.props.scoreupdate(this.state.guesslist)
    }
    this.scramblenumbers();
  };

  answerList = () => {
    var ansArray = [];
    for (var j = 0; ansArray.length < 30; j++) {
      if (ansArray.length < 16) {
        var y = Math.floor(Math.random() * 300);
        if ((y % 2) === 0) {
          ansArray.push(y);
        }
      }
      else if (ansArray.length > 15) {
        var z = Math.floor(Math.random() * 300);
        if ((z % 2) === 1) {
          ansArray.push(z);
        }
      }

    }
    console.log(ansArray);

    let t = this.scramblenumbers(ansArray);
    this.setState({ cardlist: (t) }, () => {
      // console.log(this.state.cardlist);
    });
  }

  scramblenumbers = (answers) => {
    console.log(answers)
    
    console.log("I am ,here, in scrmble numbers");
    
      for (var i = answers.length-1; i > 0; i--) {
      var x = Math.floor(Math.random() * i);
      const temp2 = answers[i];
      answers[i] =answers[x];
      answers[x] = temp2
      }
    return answers;
    // else {
    // this.setState({ cardlist: temp }, () => {
    //     // console.log(this.state.cardlist);
    // });
    // }
  }

  componentDidMount() {
    this.answerList();
  }
  render() {
    // console.log(this.state.cardlist);
    if (this.state.cardlist.length !== 0) {
      return (
        <div
          style={{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '20px auto'
          }}>
          <Grid lives={this.state.lives} score={this.state.score} selectEval={this.selectEval} cardlist={this.state.cardlist} />
          {/* <Player /> */}
          <Modal show={this.state.show} lives={this.state.lives} score={this.state.score} correctAns={this.state.correctAns} closeModal={this.closeModal} />

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