import React, { FC } from 'react';
import useFetchResource from "@/hooks/useFetchResource";
import RenderSection from "@/components/Works/renderSection/RenderSection";
import Loader from "@/components/UI/Loader/Loader";

import style from './Works.module.css';


const Works: FC = () => {
    const { data, isLoading } = useFetchResource<Card[]>("/works", "works");

    if (isLoading) {
        return <Loader />;
    }

    const htmlData = data?.filter(item => item.category === 'web') || [];
    const reactData = data?.filter(item => item.category === 'react') || [];

    return (
        <div className={style.wrapper} id="work">
            <h2 className={style.title}>Portfolio</h2>
            <RenderSection title="HTML/CSS/JS" data={htmlData} isLoading={isLoading} filterCategory="web" />
            <RenderSection title="React/Next" data={reactData} isLoading={isLoading} filterCategory="react" />
        </div>
    );
};

export default Works;