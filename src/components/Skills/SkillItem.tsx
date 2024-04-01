import React, { FC } from 'react';
const SkillItem: FC<Skill> = ({ title }) => {
  return (
    <div className='skill-item'>
      <span className='person-title'>{title}</span>
    </div>
  );
};

export default SkillItem;
