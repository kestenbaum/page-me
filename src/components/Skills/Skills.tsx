import { FC } from "react";
import Loader from '../UI/Loader/Loader';
import useFetchResource from "../../hooks/useFetchResource";

import style from './Skills.module.css';

const Skills: FC = () => {
  const { data, isLoading } = useFetchResource<Skill[]>("/skills");

  return (
    <section className={style.wrapper}>
      <h2 className={style.title} id='skill'>
        My skills
      </h2>
      <section className={style.cardBlock}>
        {!isLoading ? (
            data?.map((icon: Skill, idx: number) => (
                <div className={style.col} key={idx}>
                    <div className={style.cardWrapper}>
                        <img className={style.cardIcon} src={process.env.PUBLIC_URL + icon.img} alt='icon'/>
                        <h2 className={style.title}>{icon.title}</h2>
                    </div>
                </div>
            ))
        ) : (
            <Loader/>
        )}
      </section>
    </section>
  );
};

export default Skills;