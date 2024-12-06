import { FC } from "react";
import SkillCard from "@/components/Skills/SkillCard/SkillCard";
import Loader from '../UI/Loader/Loader';
import useFetchResource from "../../hooks/useFetchResource";

import style from './Skills.module.css';

const Skills: FC = () => {
  const { data, isLoading } = useFetchResource<Skill[]>("/skills");

  if (isLoading) {
      return <Loader />;
  }

  return (
    <section className={style.wrapper}>
      <h2 className={style.title} id='skill'>
        My skills
      </h2>
      <section className={style.cardBlock}>
          {data?.map((item:Skill, index:number) => (
              <SkillCard icon={item} idx={index} />
          )) || []}
      </section>
    </section>
  );
};

export default Skills;