import { localStorageService } from '../../services';
import history from '../../utils/history';

export const logout = (actions) => () => async (dispatch) => {
  localStorageService.removeAuthData();
  history.push('/');
  dispatch(actions.userLoggedOut());
};

export default logout;
