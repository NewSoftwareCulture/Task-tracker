import React from 'react';
import PropTypes from 'prop-types';
import NavProfileLogin from './NavProfileLogin';
import NavProfileDropdown from './NavProfileDropdown';

export function NavProfile({ isAuth }) {
  if (!isAuth) {
    return <NavProfileLogin />;
  }
  return <NavProfileDropdown />;
}

NavProfile.defaultProps = {
  isAuth: false,
};

NavProfile.propTypes = {
  isAuth: PropTypes.bool,
};

export default NavProfile;
