import React, {FC} from 'react';
import {MyButton} from "../UI/button/MyButton";
import MyImage from "../UI/image/MyImage";
import {ICardWork} from "../../types";
import cl from './CardWork.module.css';

export const CardWork:FC<ICardWork> = ({props}) => {
    return (
        <div className={cl.card}>
            <h2 className={cl.title}>{props.title}</h2>
            <MyImage src={props.img} className={cl.img}/>
            <a href={props.link}>
                <MyButton>Link to project</MyButton>
            </a>
        </div>
    );
};
