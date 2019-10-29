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
    show: false
  };
  
  showModal = () => {
    if (this.state.correctAns===15){
      this.setState({
        show: true
      })
    }
    if (this.props.lives<1){
      this.setState({
        show: true
      });
     
    }
    // console.log("I am here!");
    // console.log("dhow modal  "+this.state.show)

  };

  closeModal = e => {
    this.props.nextLevel();
    this.setState({
      show: false,
      correctAns: 0
    });
    this.forceUpdate();
    this.answerList();
  }
  // addScore = (correctAns) => {
  //   // console.log("here i am");
  //   this.state.score = this.state.score + (correctAns*25);
  //   console.log(this.state.score);
  // };
  
  selectEval = (x, tf, list) => {
    console.log(this.props.cards.criteria)
    console.log(x);
    console.log(this.props.cards.criteria(tf))
    if (this.props.cards.criteria(tf)) {
      this.state.correctAns++;
      console.log("you got it right");
      // console.log('#of right  '+this.state.correctAns)
      // scoreUpdate();
      this.props.addScore(this.state.correctAns);
    }
    else {
      // this.props.lives--;
      console.log("youre wrong");
      this.props.wrong();
      // console.log('#of lives left  '+this.props.lives);
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
        var y = Math.floor(Math.random() * 400);
        // if ((y % 2) === 0) {
        if (this.props.cards.criteria(y)===true) {
          ansArray.push(y);
        }
      }
      else if (ansArray.length > 15) {
        var z = Math.floor(Math.random() * 300);
        if (this.props.cards.criteria(z)===false) {
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
    console.log(this.props.cards);
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
          <Grid criteria={this.props.cards.criteria} lives={this.props.lives} score={this.state.score} selectEval={this.selectEval} cardlist={this.state.cardlist} />
          {/* <Player /> */}
          <Modal show={this.state.show} lives={this.props.lives} score={this.state.score} correctAns={this.state.correctAns} closeModal={this.closeModal} />

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