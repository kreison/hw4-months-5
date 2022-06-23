import {combineReducers} from "redux";
import {titleReducer} from "./titleReducer";
import {inputReducer} from "./inputReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    title: titleReducer,
    input: inputReducer,
    users: usersReducer
})