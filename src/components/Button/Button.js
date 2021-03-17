import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, text, disabled }) => (
  <div className="WrapButton">
    <button
      type="button"
      className="Button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
