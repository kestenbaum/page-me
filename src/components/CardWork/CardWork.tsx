import React, {FC} from 'react';
import {MyButton} from "../UI/button/MyButton";
import {ICardWork} from "../../types";
import cl from './CardWork.module.css';

export const CardWork:FC<ICardWork> = ({props}) => {
    return (
        <div className={cl.card}>
            <h2 className={cl.title}>{props.title}</h2>
            <img src={props.img} className={cl.img} alt={''}/>
            <a href={props.link} target="_blank">
                <MyButton>Link to project</MyButton>
            </a>
        </div>
    );
};
