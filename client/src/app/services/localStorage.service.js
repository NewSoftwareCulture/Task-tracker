const ACCESS_KEY = 'jwt-token';
const REFRESH_KEY = 'jwt-refresh-token';
const EXPIRES_KEY = 'jwt-expires';
const ID_KEY = 'jwt-user-id';

export function setTokens({
  refreshToken,
  accessToken,
  userId,
  expiresIn = 3600,
}) {
  const expiresDate = Date.now() + expiresIn * 1000;
  localStorage.setItem(ACCESS_KEY, accessToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(ID_KEY, userId);
  localStorage.setItem(EXPIRES_KEY, expiresDate);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}

export function getUserId() {
  return localStorage.getItem(ID_KEY);
}

export function getExpiresDateToken() {
  return Number.parseInt(localStorage.getItem(EXPIRES_KEY), 10);
}

export function removeAuthData() {
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(ID_KEY);
  localStorage.removeItem(EXPIRES_KEY);
}

export const localStorageService = {
  setTokens,
  removeAuthData,
  getAccessToken,
  getRefreshToken,
  getUserId,
  getExpiresDateToken,
};

export default localStorageService;
