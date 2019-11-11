import React, { Component } from "react";
import Player1 from "../player_multi1";
import Player2 from "../player_mulit2";
import { handleMovement } from "./movement";

class Grid extends Component {
  constructor() {
    super();
    this.grid = React.createRef();
  }

  componentDidMount() {
    this.grid.current.focus();
  }

  handleUserInput = e => {
    if(this.props.show){
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
                <div className="card-group" key={'cardsRow' + index}>
                  {cardsRow.map((card, i )=> (
                    <div className="card card-asteroid text-white bg-dark mb-3" key={'card'+i}>
                      <div className="card-body">
                        <h5 className="card-title">{card}</h5>
                        <p className="card-text"></p>
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
