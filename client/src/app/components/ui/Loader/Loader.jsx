import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadUser,
  getAuthStatus,
  getLoadingStatus as getAuthLoading,
} from '../../../store/auth';
import {
  loadTasks,
  getLoadingStatus as getTasksLoading,
} from '../../../store/tasks';

export function Loader({ children }) {
  const dispatch = useDispatch();

  const isAuth = useSelector(getAuthStatus());
  const authLoading = useSelector(getAuthLoading());
  const tasksLoading = useSelector(getTasksLoading());

  useEffect(async () => {
    if (isAuth) {
      await dispatch(loadUser());
      await dispatch(loadTasks());
    }
  }, [isAuth]);

  if (authLoading || tasksLoading) return 'Loading';
  return children;
}

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Loader;
