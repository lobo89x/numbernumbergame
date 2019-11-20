import React, { Component } from "react";
import Player1 from "../player_multi1";
import Player2 from "../player_mulit2";
import { connect } from 'react-redux';
import { handleMovement } from "./movement";
import { listenForGamePad, stopListenforGamePad } from "../../controller";

class Grid extends Component {
  constructor() {
    super();
    this.grid = React.createRef();
  }

  componentDidMount() {
    this.grid.current.focus();
  }

  componentDidUpdate() {
    // stop listening for game pad
    stopListenforGamePad();
    // start listening if modal are not showing
    if (this.props.show) {
      listenForGamePad(
        handleMovement(this.props.socket, this.props.currentplayer)
      );
    }
  }

  handleUserInput = e => {
    if (this.props.show) {
      handleMovement(this.props.socket, this.props.currentplayer)(e);
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

  getLockon = (index) => {
    let currentP = this.props.players.findIndex(item => item.name === this.props.currentplayer);


    console.log(this.props)

    return this.props.players[currentP].pos[0] === index[0] && this.props.players[currentP].pos[1] === index[1];
  };

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
                  key={"card" + i}
                  className={
                    card === "!"
                      ? "card card-asteroid-munched bg-dark mb-3"
                      : "card card-asteroid text-white bg-dark mb-3"
                  }
                >
                  {this.getLockon([i, index]) ? (
                    <div className="player-loc-on"></div>
                  ) : (
                    ""
                  )}
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
        })}

        <Player1/>
        <Player2/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state.GameState
  }
}


export default connect(mapStateToProps)(Grid);
