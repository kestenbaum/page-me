import React, { FC } from 'react';
import Card from "@/components/Card/Card";
import Loader from "@/components/UI/Loader/Loader";

import style from "./RenderSection.module.css";

type RenderSectionProps = {
    title: string;
    data: WorkItem[];
    filterCategory: string;
    isLoading: boolean;
}

const RenderSection: FC<RenderSectionProps> = ({ title, data, filterCategory, isLoading }) => {
    return (
        <section>
            <h3 className={style.title__section}>{title}</h3>
            <div className={style.block}>
                {isLoading ? (
                    <Loader/>
                ) : (
                    data
                        ?.filter((item) => item.category === filterCategory)
                        ?.map((item) => (
                            <Card
                                key={item._id}
                                img={item.img}
                                link={item.link}
                                title={item.title}
                            />
                        ))
                )}
            </div>
        </section>
    );
}
;

export default RenderSection;