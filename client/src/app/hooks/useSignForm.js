import { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { useDispatch } from 'react-redux';
import { validatorConfig } from '../config/validationConfig';
import { validator } from '../utils/validator';
import { useShowPassword } from './useShowPassword';

export const useSignForm = (storeFunc) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [type, setShowPassword] = useShowPassword(false);

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

    dispatch(storeFunc(data));
  };

  useEffect(validate, [data]);

  return {
    data,
    setData,
    errors,
    handleSubmit,
    passwordType: type,
    setShowPassword,
  };
};

export default useSignForm;
