import React, {FC} from 'react';
import cl from './Skills.module.css';
import {dataIcons} from "../../data/icons";
import {SkillCard} from "../../components/SkillCard/SkillCard";

export const Skills:FC = () => {
    return (
        <div className={cl.wrapper}>
            <h2 className={cl.title}>My skills</h2>
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
