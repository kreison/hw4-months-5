import {types} from "../types";

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_USER:
            return {...state, users: [...state.users, action.payload]}
        case types.CLEAR_DATA:
            return {
                ...state, data: {
                    [action.payload.name]: ""
                }
            }
        default:
            return state
    }
}