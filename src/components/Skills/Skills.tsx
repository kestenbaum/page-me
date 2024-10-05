import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getSkills } from '../../api/requests/skills';
import { SkillCard } from './SkillCard/SkillCard';
import Loader from '../Loader/Loader';
import cl from './Skills.module.css';

export const Skills: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: () => getSkills().then((responce) => responce.data)
  });

  return (
    <div className={cl.wrapper}>
      <h2 className={cl.title} id='skill'>
        My skills
      </h2>
      <section className={cl.cardBlock}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.data.map((icon, idx) => (
            <div className={cl.col} key={idx}>
              <SkillCard img={icon.img} title={icon.title} />
            </div>
          ))
        )}
      </section>
    </div>
  );
};
