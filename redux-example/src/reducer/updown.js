const iState = 0;
const changeTheNumber = (state = iState, action) => {
    switch (action.type) {
        case "INCRE": return state + 1;
        case "DREC": return state - 1;
        default: return state;
    }
}
export default changeTheNumber;