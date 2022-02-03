import React from 'react';
import { Link } from 'react-router-dom';

export function NavProfile() {
  return (
    <div className="d-flex">
      <Link className="nav-link " aria-current="page" to="/login">
        Войти
      </Link>
    </div>
  );
}

export default NavProfile;
