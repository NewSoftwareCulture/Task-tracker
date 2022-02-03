import axios from 'axios';
import get from 'lodash/get';
import set from 'lodash/set';
import config from '../../.env.json';
import { authService } from './auth.service';
import {
  getAccessToken,
  getRefreshToken,
  getExpiresDateToken,
  setTokens,
} from './localStorage.service';

const http = axios.create({
  baseURL: config.apiEndpoint,
});

http.interceptors.request.use(
  async (reqConfig) => {
    const expiresDate = getExpiresDateToken();
    const refreshToken = getRefreshToken();

    if (refreshToken && expiresDate < Date.now) {
      const tokens = await authService.refresh();
      setTokens(tokens);
    }
    const accessToken = getAccessToken();
    if (accessToken) {
      set(reqConfig, 'params.auth', accessToken);
    }
    return reqConfig;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (res) => {
    console.log('httpService.response.res', res);
    return res;
  },
  (error) => {
    const status = get(error, 'response.status');
    const isExpectedErrors = status >= 400 && status < 500;

    if (!isExpectedErrors) {
      // TODO: модалка
      console.log('[модалка] httpService.response.error', error);
      // toast.error('Somthing was wrong. Try it later');
    }
    return Promise.reject(error);
  },
);

export const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};

export default httpService;
