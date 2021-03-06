const gameTracker = require('./gameObject');

function gameEvents(socket, io){
  // Todo implement 2 player logic
  socket.on("playerMove", function({playerName, location}){
    let {name, game} = gameTracker.updatePlayer(playerName, location);
    socket.to(name).emit("playerUpdated", game);
  });

  socket.on("boardUpdate", function({playerName, boardData, score, count}){
    let {name, game} = gameTracker.updateRoomBoard(playerName, boardData, score, count);
    if(gameTracker.checkBoardForFinish(name)){
      io.in(name).emit('gameDone', game);
    }else{
      socket.to(name).emit("boardUpdated", game);
    }
  });

  socket.on("createGame", function({user}){
    let {name, game} = gameTracker.createGame(user);
    // send the event to tell the front end a game has been created
    io.in(name).emit("gameCreated", game);
  })

  socket.on("gameReady", function(playerName){
    // how to know if both players have joined the room
    let {name, game} = gameTracker.readyPlayer(playerName);
    if(game.players.filter(player => player.ready).length === 2){
      io.in(name).emit("bothPlayersReady", game);
    }
  })

  socket.on("gameFinish", function(room){
    // game is finished for both players
    
  })
} 

module.exports = gameEvents;