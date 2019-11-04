const initialState = {
    position: [625, 380],
    selection: [5, 4],
    selected: 30,
    array: [],
    fxn: {}
}
const playerReducer2 = (state=initialState, action) => {
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

export default playerReducer2