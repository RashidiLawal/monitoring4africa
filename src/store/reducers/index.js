import { combineReducers } from "redux"
import profileReducer from "./profile";
import passwordResetReducer from "./passwordreset";
import loginReducer from "./login";
var rootReducer = combineReducers({
    profile: profileReducer,
    passwordReset: passwordResetReducer,
    login: loginReducer
})

export default rootReducer;