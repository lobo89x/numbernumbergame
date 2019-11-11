import { createStore, combineReducers } from 'redux'
import playReducer from '../Game/player/reducer'
import GameState from './2pGameReducer';

const rootReducer = combineReducers({
                    player: playReducer,
                    GameState
                })

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store