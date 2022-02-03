import React from 'react';
import PropTypes from 'prop-types';

export function ShowButton({ show, onChange }) {
  return (
    <button className="input-group-text" type="button" onClick={onChange}>
      <i className={`bi bi-eye${show ? '' : '-slash'}`} />
    </button>
  );
}

ShowButton.defaultProps = {
  show: false,
  onChange: () => {},
};

ShowButton.propTypes = {
  show: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ShowButton;
