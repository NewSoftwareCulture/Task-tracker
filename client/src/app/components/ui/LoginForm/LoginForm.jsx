import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { validatorConfig } from '../../../config/validationConfig';
import { InputText } from '../../common/InputText';
import { validator } from '../../../utils/validator';
import { signIn, getErrors } from '../../../store/auth';

export function LoginForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const loginError = useSelector(getErrors());

  const validate = () => {
    const validationErrors = validator(data, validatorConfig);
    setErrors(validationErrors);

    if (isEmpty(validationErrors)) return true;
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validate();
    if (!isValid) return;

    dispatch(signIn(data));
  };

  useEffect(validate, [data]);

  const inputPasswordType = showPassword ? 'text' : 'password';

  return (
    <form className="g-3 needs-validation" onSubmit={handleSubmit}>
      <InputText
        name="login-email"
        type="text"
        value={data.email}
        placeholder="Email"
        feedback={errors.email}
        onChange={(e) => {
          setData((prev) => ({ ...prev, email: e.target.value }));
        }}
      />
      <InputText
        name="login-password"
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
      {loginError && <p className="text-danger">{loginError}</p>}
      <button
        type="submit"
        className="btn btn-lg btn-outline-primary w-100 mt-4"
      >
        Отправить
      </button>
    </form>
  );
}

export default LoginForm;
