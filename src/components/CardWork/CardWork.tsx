import {FC} from 'react';
import {MyButton} from "../UI/button/MyButton";
import {ICardWork} from "../../types";
import cl from './CardWork.module.css';

export const CardWork:FC<any> = ({props}) => {
    const {title, img, link} = props
    return (
        <div className={cl.card}>
            <h2 className={cl.title}>{title}</h2>
            <img src={img} className={cl.img} alt={''}/>
            <a href={link} target="_blank" rel="noreferrer">
                <MyButton>Link to project</MyButton>
            </a>
        </div>
    );
};


