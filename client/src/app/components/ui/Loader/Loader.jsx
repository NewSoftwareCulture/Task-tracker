import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, getAuthStatus } from '../../../store/auth';
import { loadTasks, getLoadingStatus } from '../../../store/tasks';
import { Spinner } from '../../common/Spinner';

export function Loader({ children }) {
  const dispatch = useDispatch();

  const isAuth = useSelector(getAuthStatus());
  const tasksLoading = useSelector(getLoadingStatus());

  useEffect(async () => {
    if (isAuth) {
      await dispatch(loadUser());
      await dispatch(loadTasks());
    }
  }, [isAuth]);

  if (tasksLoading) {
    return <Spinner />;
  }
  return children;
}

Loader.defaultProps = {
  children: <div />,
};
Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Loader;
