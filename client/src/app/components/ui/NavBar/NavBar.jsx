import React from 'react';
import { Link } from 'react-router-dom';
import { NavProfile } from './NavProfile';

const routes = {
  all: [
    {
      title: '✅ Трекер задач',
      route: '/',
    },
  ],
  loggedIn: [
    {
      title: 'Доска',
      route: '/task',
    },
  ],
  notLoggedIn: [],
};

export function NavBar() {
  // const isLoggedIn = useSelector(getLoggedStatus());
  const isLoggedIn = false;
  const otherRoutes = isLoggedIn ? routes.loggedIn : routes.notLoggedIn;
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
        <NavProfile isLoggedIn={isLoggedIn} />
      </div>
    </nav>
  );
}

export default NavBar;
