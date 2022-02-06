import axios from 'axios';
import get from 'lodash/get';
import set from 'lodash/set';
import config from '../../.env.json';
import { showAlert } from '../utils/showAlert';
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

    if (refreshToken && expiresDate < Date.now()) {
      const tokens = await authService.refresh();
      setTokens(tokens);
    }
    const accessToken = getAccessToken();
    if (accessToken) {
      set(reqConfig, 'headers.Authorization', `Bearer ${accessToken}`);
    }
    return reqConfig;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
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

export const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};

export default httpService;
