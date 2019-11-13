import React, { Component } from "react";
import Player from "../player";
import { handleMovement } from "../player/movement";

class Grid extends Component {
  constructor() {
    super();
    this.grid = React.createRef();
  }

  componentDidMount() {
    this.grid.current.focus();
  }

  componentDidUpdate() {
    if(!this.props.show){
      this.grid.current.focus();
    }
  }

  handleUserInput = e => {
    e.preventDefault()
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
                  key={'card'+i}
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
        <Player
          selectEval={this.props.selectEval}
          cardlist={this.props.cardlist}
        />
      </div>
    );
  }
}

export default Grid;
