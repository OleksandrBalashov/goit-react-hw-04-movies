import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, text }) => (
  <div className="WrapButton">
    <button type="button" className="Button" onClick={onClick}>
      {text}
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
