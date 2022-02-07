import get from 'lodash/get';
import { taskService } from '../../services/task.service';
import history from '../../utils/history';

export const updateTask = (actions) => (data) => async (dispatch) => {
  dispatch(actions.taskUpdateRequested());
  const { id, payload } = data;
  try {
    const task = await taskService.updateTask(id, payload);

    dispatch(actions.taskUpdateRequestSuccess(task));
    history.push('/task');
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.taskUpdateRequestFailed(message));
  }
};

export default updateTask;
