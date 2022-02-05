import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import tasksReducer from './tasks';
import authReducer from './auth';

const rootReducer = combineReducers({
  // tasks: tasksReducer,
  auth: authReducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });
export default createStore;
