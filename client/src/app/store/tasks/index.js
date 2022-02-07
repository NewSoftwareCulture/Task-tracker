import { createSlice } from '@reduxjs/toolkit';
import { createTask as _createTask } from './createTask';
import { updateTask as _updateTask } from './updateTask';
import { deleteTask as _deleteTask } from './deleteTask';
import { getTask as _getTask } from './getTask';
import { loadTasks as _loadTasks } from './loadTasks';
import { getTasks as _getTasks } from './getTasks';
import { getLoadingStatus as _getLoadingStatus } from './getLoadingStatus';

const authSlice = createSlice({
  name: 'tasks',
  initialState: {
    entities: null,
    fetchedAt: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    tasksRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    tasksRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.fetchedAt = Date.now();
      state.isLoading = false;
    },
    tasksRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    taskCreateRequested: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    taskCreateRequestSuccess: (state, action) => {
      state.entities.push(action.payload);
      state.fetchedAt = Date.now();
      state.isLoading = false;
    },
    taskCreateRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    taskUpdateRequested: (state) => {
      state.error = null;
    },
    taskUpdateRequestSuccess: (state, action) => {
      const { _id: taskId } = action.payload;
      const updateEntities = [...state.entities];
      const index = updateEntities.findIndex(({ _id }) => _id === taskId);
      updateEntities[index] = action.payload;

      state.entities = updateEntities;
      state.fetchedAt = Date.now();
    },
    taskUpdateRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    taskDeleteRequested: (state) => {
      state.error = null;
    },
    taskDeleteRequestSuccess: (state, action) => {
      const { _id: taskId } = action.payload;
      const updateEntities = state.entities.filter(({ _id }) => _id !== taskId);

      state.entities = updateEntities;
      state.fetchedAt = Date.now();
    },
    taskDeleteRequestFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { reducer, actions } = authSlice;

export const createTask = _createTask(actions);
export const updateTask = _updateTask(actions);
export const deleteTask = _deleteTask(actions);
export const getTask = _getTask(actions);
export const getTasks = _getTasks(actions);
export const loadTasks = _loadTasks(actions);
export const getLoadingStatus = _getLoadingStatus(actions);

export default reducer;
