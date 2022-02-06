export const getTask = () => (taskId) => (state) =>
  state.tasks.entitites.find(({ _id }) => _id === taskId);

export default getTask;
