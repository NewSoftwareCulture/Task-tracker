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

export function InputDate({
  value,
  title,
  feedback,
  min,
  max,
  disabled,
  onChange,
}) {
  const [date, setDate] = useState(value);

  const handleChange = (event) => {
    setDate(event.target.value);
    onChange(event);
  };

  const inputClasses = `form-control ${validationClass(!feedback).input}`;
  const feedbackClasses = validationClass(!feedback).feedback;

  return (
    <>
      {title && (
        <label className="form-label" htmlFor="InputDate">
          {title}
        </label>
      )}
      <input
        type="date"
        id="InputDate"
        className={inputClasses}
        value={date}
        min={min}
        max={max}
        disabled={disabled}
        onChange={handleChange}
      />
      <p className={feedbackClasses}>{feedback}</p>
    </>
  );
}

InputDate.defaultProps = {
  value: '',
  title: '',
  feedback: '',
  min: '',
  max: '',
  disabled: false,
  onChange: () => {},
};

InputDate.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  feedback: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputDate;
