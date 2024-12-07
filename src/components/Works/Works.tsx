import React, { FC } from 'react';
import { filterCards } from "@/helpers";
import useFetchResource from "@/hooks/useFetchResource";
import RenderSection from "@/components/Works/renderSection/RenderSection";
import Loader from "@/components/UI/Loader/Loader";

import style from './Works.module.css';


const Works: FC = () => {
    const { data, isLoading } = useFetchResource<WorkItem[]>("/works", "works");
    const htmlData = filterCards(data, "web");
    const reactData = filterCards(data, "react");

    return (
        <section className={style.wrapper} id="work">
            <h2 className={style.title}>Portfolio</h2>
            { isLoading && <Loader /> }
            <RenderSection
                title="HTML/CSS/JS"
                data={htmlData}
                isLoading={isLoading}
                filterCategory="web"
            />
            <RenderSection
                title="React/Next"
                data={reactData}
                isLoading={isLoading}
                filterCategory="react"
            />
        </section>
    );
};

export default Works;