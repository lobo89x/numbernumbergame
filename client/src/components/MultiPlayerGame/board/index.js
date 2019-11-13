import Grid from "../grid";
import React, { Component } from "react";
import { StartModal, EndModal } from "../Modal";

class Board extends Component {
  state = {
    guesslist: [],
    correctAns: 0
  };

  componentDidMount() {}

  render() {
    if (this.props.cardlist.length !== 0) {
      return (
        <div className="board">
            <Grid
              currentplayer={this.props.currentplayer}
              socket={this.props.socket}
              show={this.props.show}
              score={this.props.score}
              cardlist={this.props.cardlist}
            />
              <EndModal
                user={this.props.user}
                show={this.props.gameOver}
                lives={this.props.lives}
                score={this.props.score}
                correctAns={this.props.correctAns}
                closeModal={this.props.closeModal}
                gameOverModal={this.props.gameOverModal}
              />
              <StartModal show={this.props.gameStart} />
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
