import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../../../store/auth';

export function NavProfile() {
  const user = useSelector(getUser());
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const listClasses = `dropdown-menu dropdown-menu-end ${isOpen && 'show'}`;

  return (
    <div className="d-flex">
      <div role="none" className="dropdown" onClick={toggleMenu}>
        <button
          type="button"
          className="btn dropdown-toggle d-flex align-items-center"
        >
          <div className="me-2">{user.name}</div>
          <img
            src={user.image}
            alt="avatar"
            height="40"
            className="img-responsive rounded-circle"
          />
        </button>
        <ul className={listClasses} data-bs-popper="static">
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
