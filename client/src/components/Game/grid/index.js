import React, { Component } from "react";
import Player from "../player";
import { connect } from 'react-redux'
import { handleMovement } from "../player/movement";
import { listenForGamePad, stopListenforGamePad } from "../../controller";

class Grid extends Component {
  constructor() {
    super();
    this.grid = React.createRef();
  }

  componentDidMount() {
    console.log(this.props)
    listenForGamePad(handleMovement());
    this.grid.current.focus();
  }

  componentDidUpdate() {
    stopListenforGamePad();
    if (!this.props.show) {
      listenForGamePad(handleMovement());
      this.grid.current.focus();
    } else if (this.props.show) {
      if (this.props.correctAns >= 15) {
        listenForGamePad(this.props.closeModal, true);
      } else {
        listenForGamePad(this.props.gameOverModal, true);
      }
    }
  }

  handleUserInput = e => {
    e.preventDefault();
    if (this.props.show === false) {
      handleMovement()(e);
    }
  };

  mapCardList = () => {
    return this.props.cardlist.reduce(
      (acc, cur, index) => {
        acc[Math.floor(index / 6)].push(cur);
        return acc;
      },
      [[], [], [], [], []]
    );
  };

  getLockon = (location, index) => {
    return location[0] === index[0] && location[1] === index[1];
  }

  render() {
    return (
      <div
        onKeyDown={e => this.handleUserInput(e)}
        tabIndex="0"
        ref={this.grid}
        className="active-fix"
      >
        {this.mapCardList().map((cardsRow, index) => {
          return (
            <div className="card-group" key={"cardsRow" + index}>
              {cardsRow.map((card, i) => (
                <div
                  key={'card' + i}
                  className={
                    card === "!"
                      ? "card card-asteroid-munched bg-dark mb-3"
                      : "card card-asteroid text-white bg-dark mb-3"
            }
          >
             {this.getLockon(this.props.selection, [i, index])? 
             <div className="player-loc-on"></div>
             : ""}
                  <div className="card-body">
                <h5
                  className={
                    card === "!" ? "card-title-munch" : "card-title"
                  }
                >
                  {card}
                </h5>
              </div>
            </div>
          ))}
      </div>
    );
  })
}
<Player
  selectEval={this.props.selectEval}
  cardlist={this.props.cardlist}
/>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.player
  }
}

export default connect(mapStateToProps)(Grid);
