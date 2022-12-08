import React, {FC} from 'react';
import {SkillCardProps} from "../../types";
import cl from './SkillCard.module.css';

export const SkillCard:FC<SkillCardProps> = ({icon, title}) => {
    return (
        <div className={cl.cardWrapper}>
            <img className={cl.cardIcon} src={icon} alt="" />
            <h2 className={cl.title}>{title}</h2>
        </div>
    );
};
