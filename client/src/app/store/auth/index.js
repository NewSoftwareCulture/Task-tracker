import { createSlice } from '@reduxjs/toolkit';
import { getUserId, getAccessToken } from '../../services/localStorage.service';
import { signIn as _signIn } from './signIn';
import { signUp as _signUp } from './signUp';
import { logout as _logout } from './logout';
import { loadUser as _loadUser } from './loadUser';
import { getUser as _getUser } from './getUser';
import { getAuthStatus as _getAuthStatus } from './getAuthStatus';
import { getLoadingStatus as _getLoadingStatus } from './getLoadingStatus';
import { getErrors as _getErrors } from './getErrors';

const initStateLogin = {
  isLoading: false,
  error: null,
  auth: {
    _id: getUserId(),
  },
};
const initStateLogout = {
  isLoading: false,
  error: null,
  auth: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getAccessToken() ? initStateLogin : initStateLogout,
  reducers: {
    loadUserRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    loadUserRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoading = false;
    },
    loadUserRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoading = false;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    userLoggedOut: (state) => {
      state.auth = null;
      state.isLoading = false;
    },
    registrationRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    registrationRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoading = false;
    },
    registrationRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { reducer, actions } = authSlice;

export const signIn = _signIn(actions);
export const signUp = _signUp(actions);
export const logout = _logout(actions);
export const loadUser = _loadUser(actions);
export const getUser = _getUser(actions);
export const getAuthStatus = _getAuthStatus(actions);
export const getLoadingStatus = _getLoadingStatus(actions);
export const getErrors = _getErrors(actions);

export default reducer;
