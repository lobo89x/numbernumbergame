const initialState = {
    position2: [688, 450],
    selection2: [5, 4],
    selected2: 30,
    array2: [],
    fxn2: {}
}
const playerReducer2 = (state=initialState, action) => {
    switch(action.type) {
        case 'Move_Player2':
            return {
                ...action.payload
            }
        case 'Load_cards2':
            return {
                ...action.payload
            }
        default:
            return state
    }

}

export default playerReducer2