import {ADD_TOKEN, ADD_AUTH_ERROR, REMOVE_TOKEN } from './types';

export function SignIn(jwtToken, authError) {
    if (email.includes('iTechart') && password === 'admin') {
        return {
            type: ADD_TOKEN,
            payload: jwtToken
        }
    }
    else {
        return {
            type: ADD_AUTH_ERROR,
            payload: authError
        }
    }
}

export function SignOut() {
    return {
        type: REMOVE_TOKEN,
    }
}