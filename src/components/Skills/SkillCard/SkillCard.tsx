import React, { FC } from 'react';

import style from "./SkillsCard.module.css";

const SkillCard: FC<SkillCardProps> = ({ item, idx }) => {
    return (
        <div className={style.col} key={idx}>
            <div className={style.wrapper}>
                <img className={style.icon} src={process.env.PUBLIC_URL + item.img} alt='icon'/>
                <h2 className={style.title}>{item.title}</h2>
            </div>
        </div>
    );
};

export default SkillCard;