import React from 'react';

import classes from './Button.module.scss';

interface ButtonProps {
  clicked?: () => void;
  disabled: boolean;
  children: string;
  className: string;
  type: any;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  return (
    <button
      onClick={props.clicked}
      disabled={props.disabled}
      className={classes.Button}
      {...props}>
      {props.children}
    </button>
  );
};

export default Button;
