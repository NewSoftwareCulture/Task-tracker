import React from 'react';
import PropTypes from 'prop-types';

export function FormWrapper({ size, children }) {
  const sizes = {
    sm: 'col-md-4 offset-md-4',
    md: 'col-md-6 offset-md-3',
    lg: 'col-md-8 offset-md-2',
  };
  const configuration = sizes[size] || sizes.md;
  return (
    <div className="container mt-5">
      <div className="row">
        <div className={`${configuration} shadow p-4 bg-white br-2 rounded`}>
          {children}
        </div>
      </div>
    </div>
  );
}

FormWrapper.defaultProps = {
  size: 'md',
  children: <div />,
};

FormWrapper.propTypes = {
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FormWrapper;
