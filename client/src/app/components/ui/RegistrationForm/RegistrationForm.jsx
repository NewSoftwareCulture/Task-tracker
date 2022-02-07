import React from 'react';
import { InputText } from '../../common/InputText';
import { signUp } from '../../../store/auth';
import { useSignForm } from '../../../hooks';

export function RegistrationForm() {
  const { data, setData, errors, handleSubmit, passwordType, setShowPassword } =
    useSignForm(signUp);

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

export default RegistrationForm;
