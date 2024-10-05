import React, { FC } from 'react';
import style from './MyButton.module.css';

interface IButton
  extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled?: boolean;
}

export const MyButton: FC<IButton> = (props) => {
  const { children, ...rest } = props;

  return (
    <button className={style.btn} {...rest}>
      {children}
    </button>
  );
};
