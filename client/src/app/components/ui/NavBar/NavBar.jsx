import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
  // const isLoggedIn = useSelector(getLoggedStatus());
  const isLoggedIn = false;
  return (
    <nav className="navbar bg-light shadow mb-3 rounded">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/hueta">
              Hueta
            </Link>
          </li>
        </ul>
        <div className="d-flex">
          {isLoggedIn ? (
            // <NavProfile />
            <p>x</p>
          ) : (
            <Link className="nav-link " aria-current="page" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
