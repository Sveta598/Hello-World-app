import {ADD_TOKEN_STARTED, ADD_TOKEN, ADD_AUTH_ERROR, REMOVE_TOKEN } from './actions/types';

const initialState = {
    jwtToken: null, 
    authError: null, 
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        /*case ADD_TOKEN_STARTED:
            return state;*/
        case ADD_TOKEN: 
            return {jwtToken: action.payload, authError: null};
        case ADD_AUTH_ERROR: 
            return {jwtToken: null, authError: action.payload};
        case REMOVE_TOKEN: 
            return {jwtToken: null, authError: null};
        default: return state;
    }
}