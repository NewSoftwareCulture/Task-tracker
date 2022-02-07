import axios from 'axios';
import get from 'lodash/get';
import config from '../../.env.json';
import { showAlert } from '../utils/showAlert';
import { getRefreshToken } from './localStorage.service';

const auth = axios.create({
  baseURL: `${config.apiEndpoint}auth/`,
});

auth.interceptors.response.use(
  (res) => res,
  (error) => {
    const code = get(error, 'response.code');
    const data = get(error, 'response.data');
    const isExpectedErrors = code >= 400 && code < 500;

    if (!isExpectedErrors) {
      showAlert(data);
    }
    return Promise.reject(error);
  },
);

export const authService = {
  signUp: async ({ email, password, name }) => {
    const { data } = await auth.post('signUp', {
      name,
      email,
      password,
    });
    return data;
  },
  signIn: async ({ email, password }) => {
    const { data } = await auth.post('signIn', {
      email,
      password,
    });
    return data;
  },
  refresh: async () => {
    const refreshToken = getRefreshToken();

    const { data } = await auth.post('token', {
      refreshToken,
    });
    return data;
  },
};

export default authService;
