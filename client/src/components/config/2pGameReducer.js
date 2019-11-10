const initialState = {
     board: [],
     criteria: {},
     players: [] 
}
const GameReducer = (state=initialState, action) => {
  switch(action.type) {
      case 'UPDATE_GAME':
          return {
              ...state, ...action.payload
          }
          case 'LOAD_GAME':
            return {
                ...state, ...action.payload
            }
          case 'UPDATE_PLAYER0':
            return {
                ...state, players: [
                    {
                        name: state.players[0].name,
                        pos: action.payload,
                        score: state.players[0].score
                    },
                    state.players[1]
                ]
            }
            case 'UPDATE_PLAYER1':
            return {
                ...state, players: [
                    state.players[0],
                    {
                        name: state.players[1].name,
                        pos: action.payload,
                        score: state.players[1].score
                    },
                ]
            }
            case 'UPDATE_GAME_AND_PLAYER0':
            return {
                ...state, 
                board: action.payload.board,
                players: [
                    {
                        name: state.players[0].name,
                        pos: state.players[0].pos,
                        score: action.payload.score
                    },
                    state.players[1],
                ]
            }
            case 'UPDATE_GAME_AND_PLAYER1':
            return {
                ...state, 
                board: action.payload.board,
                players: [
                    state.players[0],
                    {
                        name: state.players[1].name,
                        pos: state.players[1].pos,
                        score: action.payload.score
                    },
                ]
            }
      default:
          return state
  }
}

export default GameReducer