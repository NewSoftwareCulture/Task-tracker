import get from 'lodash/get';
import { authService, localStorageService, userService } from '../../services';
import history from '../../utils/history';

export const signIn = (actions) => (payload) => async (dispatch) => {
  dispatch(actions.authRequested());
  try {
    const tokens = await authService.signIn(payload);
    localStorageService.setTokens(tokens);

    const user = await userService.getUser(tokens.userId);

    dispatch(actions.authRequestSuccess(user));
    history.push('/');
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.authRequestFailed(message));
  }
};

export default signIn;
