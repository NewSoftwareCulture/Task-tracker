import get from 'lodash/get';
import { localStorageService, userService } from '../../services';

export const loadUser = (actions) => () => async (dispatch) => {
  dispatch(actions.loadUserRequested());
  try {
    const userId = localStorageService.getUserId();

    const user = await userService.getUser(userId);

    dispatch(actions.loadUserRequestSuccess(user));
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.authRequestFailed(message));
  }
};

export default loadUser;
