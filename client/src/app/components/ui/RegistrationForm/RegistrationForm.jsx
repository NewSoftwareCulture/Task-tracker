import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { validatorConfig } from '../../../config/validationConfig';
import { InputText } from '../../common/InputText';
import { validator } from '../../../utils/validator';
import { authService } from '../../../services/auth.service';
import { localStorageService } from '../../../services/localStorage.service';
import history from '../../../utils/history';

export function RegistrationForm() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginErrors = validator(data, validatorConfig);
    setErrors(loginErrors);

    if (!isEmpty(loginErrors)) return;

    const tokens = await authService.signUp(data);
    localStorageService.setTokens(tokens);
    history.push('/');
  };

  const inputPasswordType = showPassword ? 'text' : 'password';

  return (
    <form className="g-3 needs-validation" onSubmit={handleSubmit}>
      <InputText
        name="registration-name"
        type="text"
        value={data.name}
        placeholder="Name"
        feedback={errors.name}
        onChange={(e) => {
          setData((prev) => ({ ...prev, name: e.target.value }));
        }}
      />
      <InputText
        name="registration-email"
        type="text"
        value={data.email}
        placeholder="Email"
        feedback={errors.email}
        onChange={(e) => {
          setData((prev) => ({ ...prev, email: e.target.value }));
        }}
      />
      <InputText
        name="registration-password"
        type={inputPasswordType}
        value={data.password}
        placeholder="Password"
        feedback={errors.password}
        showBtn
        onChange={(e) => {
          setData((prev) => ({ ...prev, password: e.target.value }));
        }}
        onChangeShow={() => {
          setShowPassword((prevState) => !prevState);
        }}
      />
      <button
        type="submit"
        className="btn btn-lg btn-outline-primary w-100 mt-4"
      >
        Отправить
      </button>
    </form>
  );
}

export default RegistrationForm;
