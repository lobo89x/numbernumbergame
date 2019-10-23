const initialState = {
    position: [0, 0]
}
const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'Move_Player':
            return {
                ...action.payload
            }
        default:
            return state
    }

}

export default playerReducer