import {ADD_TOKEN, ADD_AUTH_ERROR, REMOVE_TOKEN } from './types';

const initialState = {
    user: {
        jwtToken: null, 
        authError: null, 
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TOKEN: 
            return {...state, jwtToken: state.jwtToken.concat(action.payload)}
        case ADD_AUTH_ERROR: 
            return  {...state, authError: state.authError.concat(action.payload)}
        case REMOVE_TOKEN: 
            return {...state, jwtToken: null}
        default: return state
    }
}