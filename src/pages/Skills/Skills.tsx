import React, {FC} from 'react';
import {dataIcons} from "../../data";
import {SkillCard} from "../../components/SkillCard/SkillCard";
import cl from './Skills.module.css';

export const Skills:FC = () => {
    return (
        <div className={cl.wrapper}>
            <h2 className={cl.title} id='skill'>My skills</h2>
            <section className={cl.cardBlock}>
                    {dataIcons.map(icon =>
                        <SkillCard
                            key={icon.id}
                            icon={icon.img}
                            title={icon.title}
                        />
                    )}
                </section>
        </div>
    );
};
