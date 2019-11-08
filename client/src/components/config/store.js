import { createStore, combineReducers } from 'redux'
import playReducer from '../Game/player/reducer'
import playReducer1 from '../MultiPlayerGame/player_multi1/reducer'
import playReducer2 from '../MultiPlayerGame/player_mulit2/reducer'

const rootReducer = combineReducers({
                    player: playReducer,
                    player1: playReducer1,
                    player2: playReducer2
                })

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store