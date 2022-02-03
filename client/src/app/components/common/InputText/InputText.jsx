/* eslint-disable react/no-this-in-sfc */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ShowButton } from './ShowButton';

const validationClass = (isValid) => {
  if (isValid) {
    return {
      input: '',
      feedback: 'valid-feedback',
    };
  }
  return {
    input: 'is-invalid',
    feedback: 'invalid-feedback',
  };
};

export function InputText({
  name,
  value,
  type,
  placeholder,
  feedback,
  disabled,
  showBtn,
  onChange,
  onChangeShow,
}) {
  const [text, setText] = useState(value);
  const handleChange = (event) => {
    setText(event.target.value);
    onChange(event);
  };

  const groupClasses = placeholder ? 'form-floating mb-3 input-group' : 'mb-3';
  const inputClasses = `form-control ${validationClass(!feedback).input}`;
  const feedbackClasses = validationClass(!feedback).feedback;

  return (
    <div className={groupClasses}>
      <input
        placeholder={placeholder}
        className={inputClasses}
        id={name}
        type={type}
        value={text}
        onChange={handleChange}
        disabled={disabled}
      />
      <label className="form-label" htmlFor={name}>
        {placeholder}
      </label>
      {showBtn && <ShowButton show={type === 'text'} onChange={onChangeShow} />}
      <p className={feedbackClasses}>{feedback}</p>
    </div>
  );
}

InputText.defaultProps = {
  name: 'inputText',
  value: '',
  type: 'text',
  placeholder: '',
  feedback: '',
  disabled: false,
  showBtn: false,
  onChange: () => {},
  onChangeShow: () => {},
};

InputText.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  feedback: PropTypes.string,
  disabled: PropTypes.bool,
  showBtn: PropTypes.bool,
  onChange: PropTypes.func,
  onChangeShow: PropTypes.func,
};

export default InputText;
