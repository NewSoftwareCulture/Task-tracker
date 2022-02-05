import { createSlice } from '@reduxjs/toolkit';
import { getUserId, getAccessToken } from '../../services/localStorage.service';
import { signIn as _signIn } from './signIn';
import { signUp as _signUp } from './signUp';
import { getAuthStatus as _getAuthStatus } from './getAuthStatus';
import { getLoadingStatus as _getLoadingStatus } from './getLoadingStatus';
import { getErrors as _getErrors } from './getErrors';

const initStateLogin = {
  isLoading: false,
  error: null,
  userId: getUserId(),
};
const initStateLogout = {
  isLoading: false,
  error: null,
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getAccessToken() ? initStateLogin : initStateLogout,
  reducers: {
    authRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    authRequestSuccess: (state, action) => {
      state.userId = action.payload;
      state.isLoading = false;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    userLoggedOut: (state) => {
      state.userId = null;
      state.isLoading = false;
    },
    registrationRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    registrationRequestSuccess: (state, action) => {
      state.userId = action.payload;
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
export const getAuthStatus = _getAuthStatus(actions);
export const getLoadingStatus = _getLoadingStatus(actions);
export const getErrors = _getErrors(actions);

export default reducer;
