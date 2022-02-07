import get from 'lodash/get';
import { taskService } from '../../services/task.service';
import history from '../../utils/history';

export const deleteTask = (actions) => (data) => async (dispatch) => {
  dispatch(actions.taskDeleteRequested());
  const { id } = data;
  try {
    const task = await taskService.deleteTask(id);

    dispatch(actions.taskDeleteRequestSuccess(task));
    history.push('/task');
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.taskDeleteRequestFailed(message));
  }
};

export default deleteTask;
