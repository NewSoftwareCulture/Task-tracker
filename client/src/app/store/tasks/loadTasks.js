import get from 'lodash/get';
import { taskService } from '../../services/task.service';

export const loadTasks = (actions) => () => async (dispatch) => {
  dispatch(actions.tasksRequested());
  try {
    const tasks = await taskService.getTasks();
    dispatch(actions.tasksRequestSuccess(tasks));
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.tasksRequestFailed(message));
  }
};

export default loadTasks;
