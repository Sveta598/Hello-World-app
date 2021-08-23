import { ADD_AUTH_ERROR } from './types';

function addAuthError(Error) {
    return {
        type: ADD_AUTH_ERROR,
        payload: Error
   }
}

export default addAuthError;