import get from 'lodash/get';
import { authService, localStorageService } from '../../services';
import history from '../../utils/history';

export const signIn = (actions) => (payload) => async (dispatch) => {
  console.log('signIn.actions', actions);
  console.log('signIn.payload', payload);
  dispatch(actions.authRequested());
  try {
    const tokens = await authService.signIn(payload);
    localStorageService.setTokens(tokens);

    dispatch(actions.authRequestSuccess(tokens.userId));
    history.push('/');
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.authRequestFailed(message));
  }
};

export default signIn;
