import { types } from "../types";

export const changeTitleAction = () => {
    return {
        type: types.CHANGE_TITLE
    }
}

export const changeInputAction = (data) => {
    return {
        type: types.CHANGE_DATA,
        payload: data
    }
}

export const addUserAction = (user) => {
    return {
        type: types.ADD_USER,
        payload: user
    }
}
export const clearDataAction = (data) => {
    return {
        type: types.CLEAR_DATA,
        payload: data
    }
}

//hw
export const postJsonPlaceholder = (user) => {
    return async dispatch => {
        const response = fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        console.log(user);
        
    }
}