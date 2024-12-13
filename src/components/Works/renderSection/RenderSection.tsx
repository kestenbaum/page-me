import React, { FC } from 'react';
import Card from "@/components/Card/Card";
import Loader from "@/components/UI/Loader/Loader";

import style from "./RenderSection.module.css";


const RenderSection: FC<RenderSectionProps> = ({ title, data, filterCategory, isLoading }) => {
    return (
        <section>
            <h3 className={style.title}>{title}</h3>
            { isLoading && <Loader /> }
            <div className={style.wrapper}>
                { data
                    ?.filter((item) => item.category === filterCategory)
                    ?.map((item) => (
                        <Card
                            key={item._id}
                            img={item.img}
                            link={item.link}
                            title={item.title}
                        />
                    ))
                }
            </div>
        </section>
    );
}
;

export default RenderSection;