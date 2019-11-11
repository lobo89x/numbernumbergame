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
      // removeUser from any previous rooms
      this.removeUser(user);
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
      currentRoom.messages.push(message);
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
  addRoom: function (gameName, creator) {
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

  joinRoom: function (gameName, user) {
    let success = false;
    this.games.forEach(game => {
      // find the correct game and check if valid
      if (game.name === gameName && game.users.length < 2 && user !== game.creator) {
        // removeUser from any previous rooms
        this.removeUser(user);
        // add the user if true with a message
        game.messages.push(`${user} joied room ${gameName}`);
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
  // get the room name a user is in
  getRoomByUserName: function (userName) {
    let room = null;
    this.games.forEach(game => {
      if (game.users.includes(userName)) {
        room = game;
      }
    })
    return room;
  },

  getRoom: function (roomName) {
    let currentRoom = null;
    this.games.forEach(game => {
      if (roomName === game.name) {
        currentRoom = game;
      }
    })
    return currentRoom;
  },

  // create the room board and criteria
  createGame: function (playerName) {
    let currentRoom = this.getRoomByUserName(playerName);
    if (currentRoom) {
      currentRoom.game = {};
      currentRoom.game.players = [];
      currentRoom.game.criteria = getCriteria();
      currentRoom.game.board = generateBoard(currentRoom.game.criteria);
      currentRoom.users.forEach((player, index) => {
        if(index === 0){
          currentRoom.game.players.push({ name: player, pos: [0, 0], score: 0, ready: false });
        }else{
          currentRoom.game.players.push({ name: player, pos: [5, 4], score: 0, ready: false });
        }
        
      });
    }
    return currentRoom;
  },
  // take in new board info
  updateRoomBoard: function (playerName, newBoardInfo, score, count) {
    let currentRoom = this.getRoomByUserName(playerName);
    if (currentRoom) {
      currentRoom.game.count = count;
      currentRoom.game.board = newBoardInfo;
      currentRoom.game.players.forEach(player => {
        if (player.name === playerName) {
          player.score = score;
        }
      })
      return currentRoom;
    }
  },

  updatePlayer: function (playerName, location) {
    let currentRoom = this.getRoomByUserName(playerName);
    if (currentRoom) {
      let [player] = currentRoom.game.players.filter(player => player.name === playerName);
      if (player) {
        player.pos = location;
      }
      return currentRoom;
    }
  }, 

  readyPlayer: function(playerName){
    let currentRoom = this.getRoomByUserName(playerName);
    currentRoom.game.players.forEach(player => {
      if(player.name === playerName){
        player.ready = true;
      }
    })
    return currentRoom;
  },

  checkBoardForFinish: function (roomName) {
    let currentRoom = this.getRoom(roomName);
    if (currentRoom) {
      if (currentRoom.game.board.filter(item => item === "!").length >= 15) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Room is undefined");
    }
  }
}

module.exports = gameTracker;
