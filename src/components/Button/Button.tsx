import React from 'react';
import './Button.scss';

interface Props {
  text: string;
  disabled?: boolean;
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const Button = ({ onClick, text, disabled }: Props) => (
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

export default Button;
