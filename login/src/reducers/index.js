import {combineReducers} from "redux"
import loginreducer from "./login";
const allreducer = combineReducers({
    loginreducer,
})
export default allreducer;