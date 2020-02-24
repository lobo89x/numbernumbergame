import React, { Component } from "react";
import Board from "./board";
import axios from "axios";
import { Redirect } from "react-router-dom";

const cards = [
  {
    desc: "Mutiples of 2",
    criteria: x => {
      if (x % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Mutiples of 3",
    criteria: x => {
      if (x % 3 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 5",
    criteria: x => {
      if (x % 5 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 6",
    criteria: x => {
      if (x % 6 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 7",
    criteria: x => {
      if (x % 7 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 8",
    criteria: x => {
      if (x % 8 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 9",
    criteria: x => {
      if (x % 9 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 10",
    criteria: x => {
      if (x % 10 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 11",
    criteria: x => {
      if (x % 11 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 12",
    criteria: x => {
      if (x % 12 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Multiples of 13",
    criteria: x => {
      if (x % 13 === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Factors of 144",
    criteria: x => {
      if (144 % x === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Factors of 338",
    criteria: x => {
      if (338 % x === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Factors of 385",
    criteria: x => {
      if (385 % x === 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    desc: "Factors of 378",
    criteria: x => {
      if (378 % x === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
];

class Game extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      lives: 3,
      correctAns: 0,
      gameOver: false,
      level: 0,
      show: false,
      redirectTo: null
    };
  }

  showModal = () => {
    if (this.state.correctAns === 15) {
      this.setState({
        show: true
      });
    }
    if (this.state.lives < 1) {
      this.setState({
        show: true
      });
    }
  };

  closeModal = e => {
    //this.forceUpdate();
    if (this.state.level === (cards.length - 1)) {
      this.zeroLevel();
    } else {
      this.nextLevel();
    }
  };

  gameOverModal = e => {
    this.zeroLevel();
  };

  addScore = correctAns => {
    // console.log("here i am");
    this.setState(
      {
        score: this.state.score + this.state.correctAns * 25
      },
      () => {
        if (this.state.score > this.props.userData.highscore.highscore) {
          axios.put(`/score/${this.props.userData._id}`, { highscore: this.state.score }).then(res => console.log(res.data))
        }
      }
    );
  };

  wrong = () => {
    this.setState({
      lives: this.state.lives - 1
    });
  };

  nextLevel = () => {
    this.setState(
      {
        show: false,
        correctAns: 0,
        cardlist: [],
        level: this.state.level + 1
      },
      () => {
        this.answerList();
      }
    );
  };

  componentDidMount() {
    if (this.props.userData) {
      this.answerList();
    } else {
      this.setState({ redirectTo: '/login' });
    }
  }

  answerList = () => {
    var ansArray = [];
    for (var j = 0; ansArray.length < 30; j++) {
      if (ansArray.length < 16) {
        var y = Math.floor(Math.random() * 400);
        if (cards[this.state.level].criteria(y) === true) {
          ansArray.push(y);
        }
      } else if (ansArray.length > 14) {
        var z = Math.floor(Math.random() * 400);
        if (cards[this.state.level].criteria(z) === false) {
          ansArray.push(z);
        }
      }
    }
    let t = this.scramblenumbers(ansArray);
    this.setState({ cardlist: t });
  };

  selectEval = (x, tf, list) => {
    let correct = true;
    if (cards[this.state.level].criteria(tf)) {
      this.setState(
        {
          correctAns: this.state.correctAns + 1
        },
        () => {
          this.addScore(this.state.correctAns);
        }
        );
    } else {
      correct = false;
    }
    // if (this.state.correctAns === 15) {
    //   this.showModal();
    // }

    this.setState(
      {
        cardlist: this.state.cardlist.map((item, index) => {
          if (index === x) {
            item = "!";
          }
          return item;
        }),
        lives: correct ? this.state.lives : this.state.lives - 1
      },
      () => {
        // if (this.state.lives < 1) {
          this.showModal();
        // }
      }
    );
  };

  scramblenumbers = answers => {
    answers.sort(() => Math.random() - 0.5);
    return answers;
  };

  zeroLevel = () => {
    this.setState({
      level: 0,
      lives: 3,
      score: 0,
      cardlist: [],
      show: false,
      correctAns: 0
    }, () =>{
      this.answerList();
    });
  };

  render() {
    return (

      // <audio src="numberGameSong.mp3" autoplauy>
      //   <p>If you are reading this, it is because your browser does not support the audio element.</p>
      //   </audio> 

      <div className="Game">
        {this.state.redirectTo !== null ? (
          <Redirect to={this.state.redirectTo} />
        ) : (

            <React.Fragment>
              <div className="Game-intro">
                <div className="game-container bg-dark text-success border border-success bg-transparent">
                  <h2> Question: Find {cards[this.state.level].desc}</h2>
                  <h2>Your Score is: {this.state.score}</h2>
                  <h2>Number of lives: {this.state.lives}</h2>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center game-row-center">
                    <div className="card-deck">

                      {this.state.cardlist ? (
                        <Board
                          show={this.state.show}
                          correctAns={this.state.correctAns}
                          selectEval={this.selectEval}
                          answerList={this.answerList}
                          cardlist={this.state.cardlist}
                          score={this.state.score}
                          wrong={this.wrong}
                          lives={this.state.lives}
                          addScore={this.addScore}
                          cards={cards[this.state.level]}
                          nextLevel={this.nextLevel}
                          zeroLevel={this.zeroLevel}
                          closeModal={this.closeModal}
                          gameOverModal={this.gameOverModal}
                        />
                      ) : (
                          ""
                        )}
                    </div>
                  </div>
                  <audio src="song1.mp3" className="gameLoaded" loop autoPlay></audio>
                </div>
              </div>
            </React.Fragment>
          )}
      </div>
    );
  }

}

export default Game;
