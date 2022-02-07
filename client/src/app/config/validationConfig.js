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
      message: 'Пароль обязателен для заполнения',
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
  title: {
    isRequired: {
      message: 'Заголовок обязателен для заполнения',
    },
  },
  status: {
    isRequired: {
      message: 'Статус обязателен для заполнения',
    },
  },
};

export default validatorConfig;
