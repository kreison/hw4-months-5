import {types} from "../types";

const initialState ={
    title: "Hello world"
}

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state, title: "i am new title"}
        default:
            return state
    }
}