import React, { FC } from 'react';
import cl from './SkillCard.module.css';

export const SkillCard: FC<Skill> = ({ img, title }) => {
  return (
    <div className={cl.cardWrapper}>
      <img className={cl.cardIcon} src={process.env.PUBLIC_URL + img} alt='' />
      <h2 className={cl.title}>{title}</h2>
    </div>
  );
};
