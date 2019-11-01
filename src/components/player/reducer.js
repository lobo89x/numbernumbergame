const initialState = {
    position: [0, 0],
    selection: [0, 0],
    selected: 0,
    array: [],
    fxn: {}
}
const playerReducer = (state=initialState, action) => {
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

export default playerReducer