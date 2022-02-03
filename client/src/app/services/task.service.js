import { httpService } from './http.service';

const getTasks = async () => {
  const { data } = await httpService.get('task/');
  return data;
};

const createTask = async (payload) => {
  const { data } = await httpService.post('task/', payload);
  return data;
};

const getTask = async (taskId) => {
  const { data } = await httpService.get(`task/${taskId}`);
  return data;
};

const updateTask = async (taskId, payload) => {
  const { data } = await httpService.put(`task/${taskId}`, payload);
  return data;
};

export const taskService = {
  getTasks,
  createTask,
  getTask,
  updateTask,
};

export default taskService;
