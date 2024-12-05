import React, { FC } from 'react';
import useFetchWorks from "../../hooks/useFetchWorks";
import Loader from "../UI/Loader/Loader";
import Card from "../Card/Card";

import style from './Works.module.css';


export const Works: FC = () => {
    const { htmlResponse, isLoadingHtml, reactResponse, isLoadingReact } = useFetchWorks();

    const renderSection = (
        title: string,
        data: Card[],
        isLoading: boolean,
        filterCategory: string
    ) => (
        <div>
            <h3 className={style.title__section}>{title}</h3>
            <div className={style.block}>
                {isLoading ? (
                    <Loader />
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
        </div>
    );

  return (
      <div className={style.wrapper} id="work">
          <h2 className={style.title}>Portfolio</h2>
          {renderSection("HTML/CSS/JS", htmlResponse, isLoadingHtml, "web")}
          {renderSection("React/Next", reactResponse, isLoadingReact, "react")}
      </div>
  );
};
