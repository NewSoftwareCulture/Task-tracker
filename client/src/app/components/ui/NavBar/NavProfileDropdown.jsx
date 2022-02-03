/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getCurrentUser } from '../../store/users';

export function NavProfile() {
  const currentUser = {
    _id: '61f7d0dec4d83d1b51e1b013',
    name: 'Vlados',
    image: 'https://avatars.dicebear.com/api/avataaars/eg8mw.svg',
  };
  // const currentUser = useSelector(getCurrentUser());
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  if (!currentUser) return 'Loading';

  return (
    <div className="d-flex">
      <div className="dropdown" onClick={toggleMenu}>
        <button
          type="button"
          className="btn dropdown-toggle d-flex align-items-center"
        >
          <div className="me-2">{currentUser.name}</div>
          <img
            src={currentUser.image}
            alt="avatar"
            height="40"
            className="img-responsive rounded-circle"
          />
        </button>
        <ul
          className={`w-100 dropdown-menu dropdown-menu-end ${
            isOpen ? 'show' : ''
          }`}
          data-bs-popper="static"
        >
          <li>
            <Link to={`/users/${currentUser._id}`} className="dropdown-item">
              Профиль
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link to="/logout" className="dropdown-item">
              Выйти
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavProfile;
