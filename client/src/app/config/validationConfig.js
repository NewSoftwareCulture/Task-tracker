export const validatorConfig = {
  email: {
    isRequired: {
      message: 'Электронная почта обязательна для заполнения',
    },
    isEmail: {
      message: 'Email введен некорректно',
    },
  },
  password: {
    isRequired: {
      message: 'Пароль обязателкн для заполнения',
    },
    isCapitalSymbol: {
      message: 'Пароль должен содержать хотя бы одну заглавную букву',
    },
    isContainDigit: {
      message: 'Пароль должен содержать хотя бы одно число',
    },
    min: {
      message: 'Пароль должен состаять миниму из 8 символов',
      value: 8,
    },
  },
};

export default validatorConfig;
