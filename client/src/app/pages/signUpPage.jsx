import React from 'react';
import { Link } from 'react-router-dom';
import { FormWrapper } from '../components/common/FormWrapper';
import { RegistrationForm } from '../components/ui/RegistrationForm';

export const signUpPage = () => (
  <FormWrapper size="sm">
    <h1 className="text-center m-5">Регистрация</h1>
    <div className="p-3 m-4">
      <RegistrationForm />
    </div>
    <p className="w-100 text-center pt-4">
      <Link className="text-decoration-none text-secondary" to="/login">
        У меня есть аккаунт
      </Link>
    </p>
  </FormWrapper>
);

export default signUpPage;
