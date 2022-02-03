import React from 'react';
import PropTypes from 'prop-types';

export function FormWrapper({ children }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 shadow p-4 bg-white br-2 rounded">
          {children}
        </div>
      </div>
    </div>
  );
}

FormWrapper.defaultProps = {
  children: <div />,
};

FormWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FormWrapper;
