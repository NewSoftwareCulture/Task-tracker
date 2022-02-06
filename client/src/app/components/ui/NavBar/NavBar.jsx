import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavProfile } from './NavProfile';
import { getAuthStatus } from '../../../store/auth';

const routes = {
  all: [
    {
      title: '✅ Трекер задач',
      route: '/',
    },
  ],
  auth: [
    {
      title: 'Доска',
      route: '/task',
    },
  ],
  notAuth: [],
};

export function NavBar() {
  const isAuth = useSelector(getAuthStatus());
  const otherRoutes = isAuth ? routes.auth : routes.notAuth;
  const renderRoutes = [...routes.all, ...otherRoutes];
  return (
    <nav className="navbar bg-light shadow mb-3 rounded">
      <div className="container-fluid">
        <ul className="nav">
          {renderRoutes.map(({ title, route }) => (
            <li key={route} className="nav-item">
              <Link className="nav-link " aria-current="page" to={route}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <NavProfile isAuth={isAuth} />
      </div>
    </nav>
  );
}

export default NavBar;
