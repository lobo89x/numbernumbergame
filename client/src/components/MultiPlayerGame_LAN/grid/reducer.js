const initialState = {
    cards: []
}
const boardReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'Move_Player':
            return {
                ...action.payload
            }
        case 'Load_cards':
            return {
                ...action.payload
            }
        default:
            return state
    }

}

export default boardReducer;