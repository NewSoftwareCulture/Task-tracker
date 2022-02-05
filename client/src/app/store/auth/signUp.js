import get from 'lodash/get';
import { authService, localStorageService } from '../../services';
import history from '../../utils/history';

export const signUp = (actions) => (payload) => async (dispatch) => {
  dispatch(actions.registrationRequested());
  try {
    const tokens = await authService.signUp(payload);
    localStorageService.setTokens(tokens);

    dispatch(actions.registrationRequestSuccess(tokens.userId));
    history.push('/');
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.registrationRequestFailed(message));
  }
};

export default signUp;
