import React, { FC } from 'react';
import style from "@/components/Skills/Skills.module.css";

type SkillCardProps = {
    item: SkillItem;
    idx: number;
}

const SkillCard: FC<SkillCardProps> = ({ item, idx }) => {
    return (
        <div className={style.col} key={idx}>
            <div className={style.cardWrapper}>
                <img className={style.cardIcon} src={process.env.PUBLIC_URL + item.img} alt='icon'/>
                <h2 className={style.title}>{item.title}</h2>
            </div>
        </div>
    );
};

export default SkillCard;