import React from 'react';
import { Link } from 'react-router-dom';
import { FormWrapper } from '../components/common/FormWrapper';
import { LoginForm } from '../components/ui/LoginForm';

export const signInPage = () => (
  <FormWrapper>
    <h1 className="text-center m-5">Вход</h1>
    <div className="p-3 m-4">
      <LoginForm />
    </div>
    <p className="w-100 text-center pt-4">
      <Link className="text-decoration-none text-secondary" to="/registration">
        У меня нет аккаунта
      </Link>
    </p>
  </FormWrapper>
);

export default signInPage;
