import React, { FC } from 'react';
import style from "@/components/Skills/Skills.module.css";

type SkillCardProps = {
    icon: Skill;
    idx: number;
}

const SkillCard: FC<SkillCardProps> = ({ icon, idx }) => {
    return (
        <div className={style.col} key={idx}>
            <div className={style.cardWrapper}>
                <img className={style.cardIcon} src={process.env.PUBLIC_URL + icon.img} alt='icon'/>
                <h2 className={style.title}>{icon.title}</h2>
            </div>
        </div>
    );
};

export default SkillCard;