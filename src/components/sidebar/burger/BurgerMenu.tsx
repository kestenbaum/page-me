import React, {FC} from 'react';
import style from '../burger/BurgerMenu.module.css'
import {IBurgerMenu} from "../../../types";

const BurgerMenu:FC<IBurgerMenu> = ({state, setState}) => {
    const rootClasses = [style.burger]



    return (
        <button
            className={style.burgerWrapper}
            onClick={() => setState(!state)}
        >
            <span
                className={rootClasses.join('')}
            />
        </button>
    );
};

export default BurgerMenu;