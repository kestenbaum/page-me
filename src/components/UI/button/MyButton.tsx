import React, {FC} from 'react';
import style from './MyButton.module.css'
import {IButton} from "../../../types";

export const MyButton:FC<IButton> = (props) => {
    const {children, ...rest} = props

    return (
        <button className={style.btn} {...rest}>
            {children}
        </button>
    );
};
