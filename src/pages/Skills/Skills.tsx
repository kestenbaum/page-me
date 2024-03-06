import React, {FC} from 'react';
import {SkillCard} from "../../components/SkillCard/SkillCard";
import cl from './Skills.module.css';
import {useQuery} from "react-query";
import {skillsServices} from "../../services/skills.services";

export const Skills: FC = () => {

    const {data} = useQuery({
        queryKey: ['skills'],
        queryFn: () => skillsServices.getSkills()
    })

    return (
        <div className={cl.wrapper}>
            <h2 className={cl.title} id='skill'>My skills</h2>
            <section className={cl.cardBlock}>
                {data?.map(icon =>
                    <div
                        className={cl.col}
                        key={icon.id}
                    >
                        <SkillCard
                            icon={icon.img}
                            title={icon.title}
                        />
                    </div>
                )}
            </section>
        </div>
    );
};
