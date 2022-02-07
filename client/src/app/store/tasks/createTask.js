import get from 'lodash/get';
import { taskService } from '../../services/task.service';
import history from '../../utils/history';

export const createTask = (actions) => (data) => async (dispatch) => {
  dispatch(actions.taskCreateRequested());
  const { payload } = data;
  try {
    const task = await taskService.createTask(payload);

    dispatch(actions.taskCreateRequestSuccess(task));
    history.push('/task');
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.taskCreateRequestFailed(message));
  }
};

export default createTask;
