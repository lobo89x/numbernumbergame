import React, { Component } from "react";
import Player1 from "../player_multi1";
import Player2 from "../player_mulit2";
import { handleMovement } from "./movement";
import {listenForGamePad, stopListenforGamePad} from "../controller";

class Grid extends Component {
  constructor() {
    super();
    this.grid = React.createRef();
  }

  componentDidMount() {
    this.grid.current.focus();
  }

  componentDidUpdate(){
    // stop listening for game pad 
    stopListenforGamePad(); 
    // start listening if modal are not showing
    if(this.props.show){
      listenForGamePad(handleMovement(this.props.socket, this.props.currentplayer));
    }
  }

  handleUserInput = e => {
    if (this.props.show) {
      handleMovement(this.props.socket, this.props.currentplayer)(e);
    }
  };

  mapCardList = () => {
    return this.props.cardlist
      .reduce(
        (acc, cur, index) => {
          acc[Math.floor(index / 6)].push(cur);
          return acc;
        },
        [[], [], [], [], []]
      )
  }

  render() {
    return (
      <div
        onKeyDown={e => this.handleUserInput(e)}
        tabIndex="0"
        ref={this.grid}
        className="active-fix"
      >
        {this.mapCardList()
          .map((cardsRow, index) => {
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

        <Player1
          selectEval={this.props.selectEval}
          cardlist={this.props.cardlist}
        />
        <Player2
          selectEval={this.props.selectEval}
          cardlist={this.props.cardlist}
        />
      </div>
    );
  }
}

export default Grid;
