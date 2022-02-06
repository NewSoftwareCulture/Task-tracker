import { createSlice } from '@reduxjs/toolkit';
import { create as _create } from './create';
import { update as _update } from './update';
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
      state.isLoading = true;
    },
    taskUpdateRequestSuccess: (state, action) => {
      const { _id: taskId } = action.payload;
      const updateEntities = [...state.entities];
      const index = updateEntities.findIndex(({ _id }) => _id === taskId);
      updateEntities[index] = action.payload;

      state.entities = updateEntities;
      state.fetchedAt = Date.now();
      state.isLoading = false;
    },
    taskUpdateRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { reducer, actions } = authSlice;

export const create = _create(actions);
export const update = _update(actions);
export const getTask = _getTask(actions);
export const getTasks = _getTasks(actions);
export const loadTasks = _loadTasks(actions);
export const getLoadingStatus = _getLoadingStatus(actions);

export default reducer;
