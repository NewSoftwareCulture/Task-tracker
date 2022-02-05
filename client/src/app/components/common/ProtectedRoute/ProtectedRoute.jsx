/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../../store/auth';

export function ProtectedRoute({ component: Component, children, ...props }) {
  const isLoggedIn = useSelector(getAuthStatus());

  if (!isLoggedIn) return <Redirect to="/login" />;
  return (
    <Route
      {...props}
      render={() => (Component ? <Component {...props} /> : children)}
    />
  );
}

ProtectedRoute.defaultProps = {
  component: '',
  children: '',
};

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ProtectedRoute;
