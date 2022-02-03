import axios from 'axios';
import config from '../../.env.json';
import { getRefreshToken } from './localStorage.service';

const auth = axios.create({
  baseURL: `${config.apiEndpoint}auth/`,
});

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
