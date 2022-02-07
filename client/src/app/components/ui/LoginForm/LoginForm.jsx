import React from 'react';
import { InputText } from '../../common/InputText';
import { signIn } from '../../../store/auth';
import { useSignForm } from '../../../hooks';

export function LoginForm() {
  const { data, setData, errors, handleSubmit, passwordType, setShowPassword } =
    useSignForm(signIn);

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
        type={passwordType}
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

export default LoginForm;
