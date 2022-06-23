import {types} from "../types";


const initialState = {
    data: {}
}

export const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_DATA:
            return {...state, data:{
                [action.payload.name]:action.payload.value}
            }
        default:
            return state
    }
}
