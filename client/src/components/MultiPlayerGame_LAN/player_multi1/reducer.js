const initialState = {
    position1: [0, 0],
    selection1: [0, 0],
    selected1: 0,
    array1: [],
    fxn1: {}
}
const playerReducer1 = (state=initialState, action) => {
    switch(action.type) {
        case 'Move_Player1':
            return {
                ...action.payload
            }
        case 'Load_cards1':
            return {
                ...action.payload
            }
        default:
            return state
    }

}

export default playerReducer1