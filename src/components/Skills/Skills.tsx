import React, {FC} from 'react';
import {SkillCard} from "./SkillCard/SkillCard";
import {skillsServices} from "../../services/skills.services";
import {useQuery} from "react-query";
import cl from './Skills.module.css';
import Loader from "../Loader/Loader";


export const Skills: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['skills'],
        queryFn: () => skillsServices.getSkills()
    })

    return (
        <div className={cl.wrapper}>
            <h2 className={cl.title} id='skill'>My skills</h2>
            <section className={cl.cardBlock}>
                {
                    isLoading ?
                        <Loader/>
                        :
                        data?.map((icon, idx) =>
                            <div
                                className={cl.col}
                                key={idx}
                            >
                                <SkillCard
                                    icon={icon.img}
                                    title={icon.title}
                                />
                            </div>
                        )
                }
            </section>
        </div>
    );
};
