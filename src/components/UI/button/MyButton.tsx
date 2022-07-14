import React, {FC} from 'react';
import style from './MyButton.module.css'

interface IButton extends
    React.DetailedHTMLProps<React.HTMLProps<HTMLButtonElement>, HTMLButtonElement>{}

const MyButton:FC<IButton> = (props) => {

    const {children} = props

    return (
        <button className={style.btn}>
            {children}
        </button>
    );
};

export default MyButton;