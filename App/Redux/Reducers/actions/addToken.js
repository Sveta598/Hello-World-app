import { ADD_TOKEN } from './types';

function addToken(Token) {
   return {
        type: ADD_TOKEN,
        payload: Token
   }
}

export default addToken;