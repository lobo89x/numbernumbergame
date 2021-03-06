import React, { Component } from "react";
import "./roomComponent.css";
import WaitingRoomComponent from "./roomComponents/waitingRoomComponent";
import GameRoomComponent from "./roomComponents/gameRoomComponent";
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux'

class RoomComponent extends Component {
  constructor() {
    super();
    this.state = {
      // modal for game creation flag
      modalOpen: false,
      // controlled input for game creation
      gameName: "",
      // error messaged from user trying to create game
      modalError: "",
      // element from list of available rooms the user has clicked on
      clickedGameElement: null,
      // place to redirect to
      redirectTo: null
    };
  }

  getGames = () => {
    // get the games but put the newer ones at the top
    return this.props.games.filter(game => game.name !== "waitingRoom").reverse();
  };

  componentDidMount() {
    this.props.socket.on("gameCreated", data => {
      this.props.dispatch({
        type: "UPDATE_GAME",
        payload: data
      })
      this.setState({redirectTo: "/2pgame"});
    })
  }

  selectGame = gameID => {
    // sets the clicked game room when a player clicks on an element shows the join room
    this.setState({ clickedGameElement: gameID });
  };

  changeGameNameText = e => {
    // matches the controlled elements value with state
    this.setState({ gameName: e.target.value });
  };

  createNewGameClicked = () => {
    // opens modal for creating a  game
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  submitNewGame = () => {
    // validation for creating a new game
    // check that game name is not empty
    // game name does not exist
    // and all characters are alphanumeric
    if (this.state.gameName === "") {
      this.setState({ modalError: "Error: Game name can not be blank" });
    } else if (
      this.props.games.filter(x => x.name === this.state.gameName).length > 0
    ) {
      this.setState({ modalError: "Error: Game Name Already Taken" });
    } else if (/[^\w\d]/.test(this.state.gameName)) {
      this.setState({
        modalError: "Error: Room cannot contain non alphanumeric characters"
      });
    } else {
      // closes the modal and removes all set items
      this.setState({ modalOpen: false, modalError: "", gameName: ""});
      // handle sending new game to be made on the backend
      this.props.socket.emit("createRoom", {
        user: this.props.user,
        room: this.state.gameName,
      });
    }
  };

  closeModal = () => {
    // closes the game creation modal
    this.setState({ modalOpen: false, modalError: "", gameName: "" });
  };

  joinGame = room => {
    // send join room event to back end, this is handled in the lobby component
    this.props.socket.emit("joinRoom", { room, user: this.props.user });
  };

  leaveGame = room => {
    // send leave room event to back end, this is handled in the lobby component
    this.props.socket.emit("leaveRoom", { room, user: this.props.user });
  };

  checkForEnter = (e) => {
    // handle when user hits enter in the input box for messages
    if(e.keyCode === 13){
      this.submitNewGame();
    }
  }

  start2PlayerGame = room => {
    // send an event to start the game this will create the game
      console.log(room);
      this.props.socket.emit("createGame", {room, user: this.props.user});
  }

  start1PlayerGame = () => {
    // use function to change page to 1 player game
    this.setState({redirectTo: "/game"});
  }

  render() {
    return (
      <div className="room-wrapper">
        {this.state.redirectTo ? <Redirect to={this.state.redirectTo} /> : ""}
        {this.props.screen === "lobby" ? (
          <WaitingRoomComponent
            users={this.props.users}
            state={this.state}
            getGames={this.getGames}
            createNewGameClicked={this.createNewGameClicked}
            selectGame={this.selectGame}
            joinGame={this.joinGame}
            leaveGame={this.leaveGame}
            start = {this.start1PlayerGame}
          />
        ) : (
          <GameRoomComponent
            gameData={this.props.gameData}
            leaveGame={this.leaveGame}
            user={this.props.user}
            start = {this.start2PlayerGame}
            screen = {this.props.screen}
          />
        )}
        {this.state.modalOpen ? (
          <div className="room-info-modal">
            <div className="room-info-modal-title">
              <p className="room-info-modal-title-text ml-1">
                CREATE A MULTIPLAYER GAME
              </p>
              <p className="room-info-close-modal" onClick={this.closeModal}>
                X
              </p>
            </div>
            <div className="room-info-modal-form">
              <label htmlFor="game-name">
                <h4>Give the game a name</h4>
              </label>
              <input
                name="game-name"
                value={this.state.gameName}
                onChange={this.changeGameNameText}
                onKeyDown={this.checkForEnter}
              ></input>
              <p className="room-info-modal-error-message">
                {this.state.modalError}
              </p>
              <button className="bg-success" onClick={this.submitNewGame}>CREATE GAME</button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state.GameData
  }
}

export default connect(mapStateToProps)(RoomComponent);
