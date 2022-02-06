import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useDispatch } from 'react-redux';
import { validatorConfig } from '../../../config/validationConfig';
import { InputText } from '../../common/InputText';
import { validator } from '../../../utils/validator';
import { signUp } from '../../../store/auth';

export function RegistrationForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

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

    dispatch(signUp(data));
  };

  useEffect(validate, [data]);

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
