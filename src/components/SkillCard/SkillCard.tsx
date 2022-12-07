import React, {FC} from 'react';
import cl from './SkillCard.module.css';

interface SkillCard {
    title: string,
    icon: string | any
}

export const SkillCard:FC<SkillCard> = ({icon, title}) => {
    return (
        <div className={cl.cardWrapper}>
            <img className={cl.cardIcon} src={icon} alt="" />
            <h2 className={cl.title}>{title}</h2>
        </div>
    );
};
