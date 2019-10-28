import { createStore, combineReducers } from 'redux'
import playReducer from '../player/reducer'

const rootReducer = combineReducers({
                    player: playReducer,
                })

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store