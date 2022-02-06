import get from 'lodash/get';
import { authService, localStorageService, userService } from '../../services';
import history from '../../utils/history';

export const signUp = (actions) => (payload) => async (dispatch) => {
  dispatch(actions.registrationRequested());
  try {
    const tokens = await authService.signUp(payload);
    localStorageService.setTokens(tokens);

    const user = await userService.getUser(tokens.userId);

    dispatch(actions.registrationRequestSuccess(user));
    history.push('/');
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.registrationRequestFailed(message));
  }
};

export default signUp;
