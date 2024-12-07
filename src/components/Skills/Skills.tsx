import { FC } from "react";
import { renderItemsList } from "@/helpers";
import SkillCard from "@/components/Skills/SkillCard/SkillCard";
import Loader from '../UI/Loader/Loader';
import useFetchResource from "../../hooks/useFetchResource";

import style from './Skills.module.css';

const Skills: FC = () => {
  const { data, isLoading, isError, error } = useFetchResource<SkillItem[]>("/skills");
  const skillsList = renderItemsList(data?.data, SkillCard);

  return (
    <section className={style.wrapper}>
      <h2 className={style.title} id='skill'>
        My skills
      </h2>
          { isLoading && <Loader /> }
          { isError && <span>{error?.message}</span>}
          <section className={style.cards}>
              { skillsList }
          </section>
    </section>
  );
};

export default Skills;