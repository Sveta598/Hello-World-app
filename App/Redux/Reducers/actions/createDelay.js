import signIn from '../../../Services/Authentication';
import addToken from './addToken';
import addAuthError from './addAuthError';

function authValidation() {
  return dispatch => {
    return signIn()
      .then(
        Token => {
          dispatch(addToken(Token));
      })
      .catch(
        Error => {
          dispatch(addAuthError(Error));
      });
  };
};

export default authValidation;