import React, { Component } from "react";
import Board from './board';
import { Redirect } from "react-router-dom";
import './Game.css';


const cards = [
  {
    desc: "Mutiples of 2",
    criteria: (x) => {
      if ((x % 2) == 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Mutiples of 3",
    criteria: (x) => {
      if ((x % 3) == 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Multiples of 5",
    criteria: (x) => {
      if ((x % 5) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Multiples of 7",
    criteria: (x) => {
      if ((x % 7) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Multiples of 13",
    criteria: (x) => {
      if ((x % 13) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Factors of 144",
    criteria: (x) => {
      if ((144 % x) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Factors of 338",
    criteria: (x) => {
      if ((338 % x) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Factors of 385",
    criteria: (x) => {
      if ((385 % x) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  },
  {
    desc: "Factors of 378",
    criteria: (x) => {
      if ((378 % x) === 0) {
        return true;
      }
      else {
        return false;
      }
    },
  }
];


class MultiPlayerGame extends Component {
  state = {
    score: 0,
    lives: 3,
    correctAns: 0,
    gameOver: false,
    level: 0,
    show: false
  };
  // const Game = () => {

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
    this.forceUpdate();
    if (this.state.level===8){
      this.zeroLevel();
    }
    else{
      this.nextLevel();
    }
    this.answerList();
    // this.setState({ cardlist: this.cardlist }, () => {
    //   // console.log(this.props.cardlist);
    // });
  }

  gameOverModal = e => {
    this.zeroLevel();
    this.setState({
      show: false,
      correctAns: 0,
      
    });
    this.forceUpdate();
    this.answerList();
    // this.setState({ cardlist: this.cardlist }, () => {
    //   // console.log(this.props.cardlist);
    // });
  }
  // addScore = (correctAns) => {
  //   // console.log("here i am");
  //   this.state.score = this.state.score + (correctAns*25);
  //   console.log(this.state.score);
  // };
  

// clearSpace(y){
//   this.props.cardlist[y] = '';
// }

  addScore = (correctAns) => {
    // console.log("here i am");
    this.setState({
      score: this.state.score + (correctAns * 25)
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
    // this.setState({
    //   show: false,
    //   correctAns: 0,
    //   cardlist: []
    // });
    this.setState({
      show: false,
      correctAns: 0,
      cardlist: [],
      level: this.state.level + 1
    }, () => {
      console.log("this is the level::  " + this.state.level);
      this.answerList();
    })

    // return ""
  };

  componentDidMount() {
    this.answerList();

    if(this.props.socket){
      let socket = this.props.socket;
      console.log(this.props.user)
      socket.emit("gameReady", this.props.user);
  
      // emittable events 
      //playerMove  - emit this after the player moves
      //boardUpdate - emit this after the player munches
  
      this.props.socket.on("bothPlayersReady", ()=> {
        // triggered when both players have loaded this component
        // should trigger the countdown to begin the game?
      });
  
      this.props.socket.on("playerUpdated", data => {
        //data will be the new game data {board: [], crit: {}, players: []}
        // triggered when the other player moves should update store with new info
      });
  
      this.props.socket.on("boardUpdated", data => {
        //data will be the new game data {board: [], crit: {}, players: []}
        // triggers after another player updates the board should update store with new info
      });
  
      this.props.socket.on("gameDone", data => {
        //data will be the new game data {board: [], crit: {}, players: []}
        // triggers if the board has no numbers left that match the criteria 
      });
    }
    
    
  }

  answerList = () => {
    console.log("again this is this level::  " + this.state.level)
    var ansArray = [];
    console.log(cards[this.state.level].criteria);
    for (var j = 0; ansArray.length < 30; j++) {
      if (ansArray.length < 16) {
        var y = Math.floor(Math.random() * 400);
        // if ((y % 2) === 0) {
        if (cards[this.state.level].criteria(y) === true) {
          ansArray.push(y);
        }
      }
      else if (ansArray.length > 14) {
        var z = Math.floor(Math.random() * 400);
        if (cards[this.state.level].criteria(z) === false) {
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


  selectEval = (x, tf, list) => {
    // console.log(this.props.cards.criteria)
    // console.log(x);
    // console.log(this.props.cards.criteria(tf))
    if (cards[this.state.level].criteria(tf)) {
      this.state.correctAns++;
      console.log("you got it right");
      // console.log('#of right  '+this.state.correctAns)
      // scoreUpdate();
      this.addScore(this.state.correctAns);
    }
    else {
      // this.props.lives--;
      console.log("youre wrong");
      this.wrong();
      // console.log('#of lives left  '+this.props.lives);
      // lifeLoss();
    }
    if (this.state.correctAns === 15) {
      this.showModal();
    }
    if (this.state.lives < 1) {
      this.showModal();
    }
    this.setState(
      {
        cardlist: this.state.cardlist.map((item, index) => {
          if (index === x) {
            item = '';
          }
          return item;
        })
      }
    );
  }

  scramblenumbers = (answers) => {
    console.log(answers);

    console.log("I am ,here, in scrmble numbers");
    answers.sort(() => Math.random() - 0.5);
    // for (var i = answers.length-1; i > 0; i--) {
    // var x = Math.floor(Math.random() * i);
    // const temp2 = answers[i];
    // answers[i] =answers[x];
    // answers[x] = temp2
    // }
    console.log(answers)

    return answers;
    // else {
    // this.setState({ cardlist: temp }, () => {
    //     // console.log(this.state.cardlist);
    // });
    // }
  }


  zeroLevel = () => {
    // console.log("here i am");
    this.setState({
      level: 0,
      lives: 3,
      score: 0,
      cardlist: []
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
      <div className="Game">
      {this.props.socket === null ? (
          <Redirect to="/login" />
        ) : (
          <React.Fragment>
        <div className="Game-intro">
          <h3>{cards[this.state.level].desc}</h3>

          <h6>Your Score is::  {this.state.score}</h6>
          <h5>Number of lives:: {this.state.lives}</h5>
        </div>
        <div className="container">
          <div className="row">

            <div className="col-lg-12 text-center game-row-center">
              <div className="card-deck">
                {this.state.cardlist ?
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
                    gameOverModal={this.gameOverModal} />
                  : ""}
              </div>
            </div>
            <div className="col-lg-3 text-center"></div>
          </div>
        </div>
        </React.Fragment>
        )}
      </div>
    );
  }
}

export default MultiPlayerGame;

