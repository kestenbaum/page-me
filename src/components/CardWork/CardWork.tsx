import React, {FC} from 'react';
import MyButton from "../UI/button/MyButton";
import MyImage from "../UI/image/MyImage";
import {ICardWork} from "../../types";
import cl from './CardWork.module.css';

export const CardWork:FC<ICardWork> = ({props}) => {
    return (
        <div className='card-work'>
            <h2 className={cl.title}>{props.title}</h2>
            <MyImage src={props.img} className='image-work'/>
            <a href={props.link} className='link'>
                <MyButton>Link to project</MyButton>
            </a>
        </div>
    );
};
