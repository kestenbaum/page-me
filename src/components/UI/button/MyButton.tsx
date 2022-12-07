import React, {FC} from 'react';
import style from './MyButton.module.css'
import {IButton} from "../../../types";

export const MyButton:FC<IButton> = ({children}) => {
    return (
        <button className={style.btn}>
            {children}
        </button>
    );
};
