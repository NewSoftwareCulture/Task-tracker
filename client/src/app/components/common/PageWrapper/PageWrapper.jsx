import React from 'react';
import PropTypes from 'prop-types';

export function PageWrapper({ children }) {
  return (
    <div className="contaier">
      <div className="row">
        <div className="col-md-8 offset-md-2 bg-white p-2">{children}</div>
      </div>
    </div>
  );
}

PageWrapper.defaultProps = {
  children: <div />,
};

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageWrapper;
