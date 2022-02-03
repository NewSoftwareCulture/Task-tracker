import React from 'react';
import PropTypes from 'prop-types';
import NavProfileLogin from './NavProfileLogin';
import NavProfileDropdown from './NavProfileDropdown';

export function NavProfile({ isLoggedIn }) {
  if (!isLoggedIn) {
    return <NavProfileLogin />;
  }
  return <NavProfileDropdown />;
}

NavProfile.defaultProps = {
  isLoggedIn: false,
};

NavProfile.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default NavProfile;
