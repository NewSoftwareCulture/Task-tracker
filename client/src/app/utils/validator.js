import forEach from 'lodash/forEach';

const validate = (validateMethod, data, config) => {
  let statusValidate;
  if (validateMethod === 'isRequired') {
    if (typeof data === 'boolean') {
      statusValidate = !data;
    } else {
      statusValidate = data.trim() === '';
    }
  } else if (validateMethod === 'isEmail') {
    const emailRegExp = /^\S+@\S+\.\S+$/g;
    statusValidate = !emailRegExp.test(data);
  } else if (validateMethod === 'isCapitalSymbol') {
    const capitalRegExp = /[A-Z]+/g;
    statusValidate = !capitalRegExp.test(data);
  } else if (validateMethod === 'isContainDigit') {
    const digitRegExp = /\d+/g;
    statusValidate = !digitRegExp.test(data);
  } else if (validateMethod === 'min') {
    statusValidate = data.length < config.value;
  }
  if (statusValidate) return config.message;
  return null;
};

export const validator = (data, config) => {
  const errors = {};
  forEach(data, (value, fieldName) => {
    forEach(config[fieldName], (v, validateMethod) => {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod],
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    });
  });
  return errors;
};

export default validator;
