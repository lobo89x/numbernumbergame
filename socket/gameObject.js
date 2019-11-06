const { generateBoard, getCriteria } = require("./gameCriteria");

// games tracking object handles all aspects of users joining games or leaving games
const gameTracker = {
  // list of all users
  users: [],
  // list of all games default is a waitingRoom
  games: [
    { name: "waitingRoom", messages: [], users: [], game: { board: [], criteria: {}, players: [] } }
  ],
  joinWaitingRoom: function (user) {
    // keep track if adding a user was a success
    let success = false;
    let currentRoom = this.getRoom("waitingRoom");
    if (currentRoom) {
      // add the user by push
      currentRoom.users.push(user);
      // update messages so that other users are aware
      currentRoom.messages.push(user + " joined room.")
      success = true;
    }

    return success;
  },
  addMessage: function (message, room) {
    // loop through games to find correct game
    let currentRoom = this.getRoom(room);
    if (currentRoom) {
      game.messages.push(message);
    }
  },
  addUsers: function (username) {
    // adds the user to the users list
    this.users.push(username);
  },
  // handle user disconnected
  removeUser: function (username) {
    // game to remove holder
    let gameToRemove = null;

    this.games.forEach(game => {
      if (game.creator === username) {
        gameToRemove = game.name;
      }
      // only needs to run if the user was not a creator
      if (game.users.includes(username) && gameToRemove === null) {
        game.users = game.users.filter(user => user != username);
        game.messages.push(username + " has left the room");
      }
    });
    // remove users from user list
    this.users = this.users.filter(user => user != username);
    // remove the game that had the creator removed
    this.games = this.games.filter(game => game.name != gameToRemove);
    // return the affected game
    return { gameToRemove };
  },

  // add a game to the gameslist
  addGame: function (gameName, creator) {
    // if game name does not exist or game with the same name exists or the user has created another game this fails
    if (!gameName || this.games.some(x => x.name === gameName || x.creator === creator)) {
      return false;
    } else {
      // otherwise create a new game and add it to the list
      this.games.push(
        {
          name: gameName,
          creator: creator,
          users: [creator],
          messages: [`${creator} has created room ${gameName}`],
          board: null,
          gameCriteria: null
        });
      return true;
    }
  },

  joinGame: function (gameName, user) {
    let success = false;
    this.games.forEach(game => {
      // find the correct game and check if valid
      if (game.name === gameName && game.users.length < 2 && user !== game.creator) {
        // add the user if true with a message
        game.messages.push(`${user} joied room ${gameName}`)
        game.users.push(user);
        success = true;
      }
    });
    return success;
  },

  // handle when users leave a game
  leaveGame: function (gameName, user) {
    // holder for if user or creator left
    let personLeft = null;
    // find the correct game
    this.games.forEach(game => {
      if (game.name === gameName && game.users.includes(user)) {
        if (game.creator === user) {
          // remove the game because the creator left it
          this.games = this.games.filter(game => gameName !== game.name);
          personLeft = "creator";
        } else {
          // remove the user from game
          game.users = game.users.filter(name => name !== user);
          // add message to notify other players
          game.messages.push(`${user} has left the room.`);
          personLeft = "user";
        }
      }
    });
    // return the type of user leaving
    return personLeft;
  },
  getRoom: function (roomName) {
    let currentRoom = null;
    this.games.forEach(game => {
      if (roomName === game.name) {
        currentRoom = game;
      }
    })
    console.log(currentRoom)
    return currentRoom;
  },

  // create the room board and criteria
  createGame: function (roomName) {
    let currentRoom = this.getRoom(roomName);
    if (currentRoom) {
      currentRoom.game.criteria = getCriteria();
      currentRoom.game.board = generateBoard(currentRoom.game.criteria.criteria);
      currentRoom.users.forEach(player => {
        currentRoom.game.players.push({ name: player, pos: [], score: 0 });
      });
    }
    return currentRoom;
  },
  // take in new board info
  updateRoomBoard: function (roomName, newBoardInfo) {
    let currentRoom = this.getRoom(roomName);
    if (currentRoom) {
      currentRoom.game.board = newBoardInfo;
      return currentRoom;
    }
  },

  updatePlayer: function(name, location, score){
    let currentRoom = this.getRoom(roomName);
    if (currentRoom) {
      let [player] = currentRoom.game.players.filter(player => player.name === name);
      if(player){
        player.pos = location;
        player.score = score;
      }
      currentRoom.game.board = newBoardInfo;
      return currentRoom;
    } 
  },

  checkBoardForFinish: function (roomName) {
    let currentRoom = this.getRoom(roomName);
    if (currentRoom) {
      if (currentRoom.game.board.filter(item => item === "").length >= 15) {
        return true;
      } else {
        return false;
      }
    }else{
      throw new Error("Room is undefined");
    }
  }
}

module.exports = gameTracker;
