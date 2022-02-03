import { httpService } from './http.service';

const getUsers = async () => {
  const { data } = await httpService.get('user/');
  return data;
};

const getUser = async (userId) => {
  const { data } = await httpService.get(`user/${userId}`);
  return data;
};

const updateUser = async (userId, payload) => {
  const { data } = await httpService.put(`user/${userId}`, payload);
  return data;
};

export const userService = {
  getUsers,
  getUser,
  updateUser,
};

export default userService;
