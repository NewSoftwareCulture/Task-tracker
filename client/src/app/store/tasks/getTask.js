export const getTask = () => (taskId) => (state) =>
  state.tasks.entities?.find(({ _id }) => _id === taskId);

export default getTask;
