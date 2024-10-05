import React, { FC } from 'react';
import style from './Button.module.css';

interface IButton
  extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
}

export const Button: FC<IButton> = (props) => {
  const { children, ...rest } = props;

  return (
    <button className={style.btn} {...rest}>
      {children}
    </button>
  );
};
