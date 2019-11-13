import Grid from "../grid";
import React, { Component } from "react";
import Modal from "../Modal";

class Board extends Component {
  state = {
    guesslist: [],
    cardlist: [],
    correctAns: 0
  };

  componentDidMount() {
    this.setState({ cardlist: this.props.cardlist }, () => {
      // console.log(this.props.cardlist);
    });
  }

  render() {
    if (this.props.cardlist.length !== 0) {
      return (
        <div className="board">
          <Grid
            show={this.props.show}
            criteria={this.props.cards.criteria}
            lives={this.props.lives}
            score={this.props.score}
            selectEval={this.props.selectEval}
            cardlist={this.props.cardlist}
          />
          <Modal
            show={this.props.show}
            lives={this.props.lives}
            score={this.props.score}
            correctAns={this.props.correctAns}
            closeModal={this.props.closeModal}
            gameOverModal={this.props.gameOverModal}
          />
        </div>
      );
    } else {
      return (
        <div className="card-group">
          <h2> LOADING.........</h2>
        </div>
      );
    }
  }
}

export default Board;
