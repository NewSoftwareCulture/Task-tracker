import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/auth';
import { Spinner } from '../../common/Spinner';

export function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return <Spinner />;
}

export default Logout;
