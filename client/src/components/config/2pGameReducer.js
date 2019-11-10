const initialState = {
     board: [],
     criteria: {},
     players: [] 
}
const GameReducer = (state=initialState, action) => {
  switch(action.type) {
      case 'UPDATE_GAME':
          return {
              ...action.payload
          }
          case 'LOAD_GAME':
            return {
                ...action.payload
            }
      default:
          return state
  }
}

export default GameReducer