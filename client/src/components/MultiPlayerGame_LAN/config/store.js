import { createStore, combineReducers } from 'redux'
import playReducer1 from '../player_multi1'
import playReducer2 from '../player_mulit2'

const rootReducer = combineReducers({
                    player1: playReducer1,
                    player2: playReducer2,
                })

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store