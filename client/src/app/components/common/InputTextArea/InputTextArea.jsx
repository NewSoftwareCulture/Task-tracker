import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

export function InputTextArea({
  value,
  title,
  placeholder,
  feedback,
  rows,
  cols,
  maxlength,
  readonly,
  disabled,
  onChange,
}) {
  const [text, setText] = useState(value);

  const handleChange = (event) => {
    setText(event.target.value);
    onChange(event);
  };

  const inputClasses = `form-control ${validationClass(!feedback).input}`;
  const feedbackClasses = validationClass(!feedback).feedback;

  return (
    <>
      {title && (
        <label className="form-label" htmlFor="InputTextArea">
          {title}
        </label>
      )}
      <textarea
        id="InputTextArea"
        className={inputClasses}
        value={text}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        maxLength={maxlength}
        readOnly={readonly}
        disabled={disabled}
        onChange={handleChange}
      />
      <p className={feedbackClasses}>{feedback}</p>
    </>
  );
}

InputTextArea.defaultProps = {
  value: '',
  title: '',
  placeholder: '',
  feedback: '',
  rows: '',
  cols: '',
  maxlength: '',
  readonly: false,
  disabled: false,
  onChange: () => {},
};

InputTextArea.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  feedback: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  maxlength: PropTypes.string,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputTextArea;
