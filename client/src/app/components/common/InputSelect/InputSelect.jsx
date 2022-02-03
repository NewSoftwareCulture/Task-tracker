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

export function InputSelect({
  title,
  value,
  options,
  name,
  size,
  feedback,
  disabled,
  onChange,
}) {
  const [selected, setSelected] = useState(value);
  const handleChange = (event) => {
    setSelected(event.target.value);
    onChange(event);
  };

  const selectClasses = `form-select ${validationClass(!feedback).input}`;
  const feedbackClasses = validationClass(!feedback).feedback;

  const renderOptions = options.map((o) => (
    <option key={o.value} value={o.value} selected={o.selected}>
      {o.label}
    </option>
  ));

  return (
    <>
      <label className="form-label" htmlFor="InputSelect">
        {title}
      </label>
      <select
        className={selectClasses}
        id="InputSelect"
        name={name}
        value={selected}
        size={size}
        disabled={disabled}
        onChange={handleChange}
      >
        {renderOptions}
      </select>
      <p className={feedbackClasses}>{feedback}</p>
    </>
  );
}

InputSelect.defaultProps = {
  title: '',
  value: '',
  options: [],
  name: '',
  size: '',
  feedback: '',
  disabled: false,
  onChange: () => {},
};

InputSelect.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  size: PropTypes.string,
  feedback: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default InputSelect;
