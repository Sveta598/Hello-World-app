import signIn from '../../../Services/Authentication';
//import addTokenStarted from './addTokenStarted';
import addToken from './addToken';
import addAuthError from './addAuthError';

function authValidation() {

  return dispatch => {
    //dispatch(addTokenStarted());

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