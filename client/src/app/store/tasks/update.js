import get from 'lodash/get';
import { taskService } from '../../services/task.service';
import history from '../../utils/history';

export const update = (actions) => (id, data) => async (dispatch) => {
  dispatch(actions.taskUpdateRequested());
  try {
    const task = await taskService.updateTask(id, data);

    dispatch(actions.taskUpdateRequestSuccess(task));
    history.push('/task');
  } catch (error) {
    const message = get(error, 'response.data') || error.message;
    dispatch(actions.taskUpdateRequestFailed(message));
  }
};

export default update;
