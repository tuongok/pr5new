

const loginreducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.status;
        default:
            return state;
    }
}
export default loginreducer; 