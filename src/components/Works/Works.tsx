import React, { FC } from 'react';
import Loader from "../UI/Loader/Loader";
import Card from "../Card/Card";
import useFetchResource from "../../hooks/useFetchResource";

import style from './Works.module.css';


const Works: FC = () => {
    const { data: htmlResponse, isLoading: isLoadingHtml } = useFetchResource("/works", "web");
    const { data: reactResponse, isLoading: isLoadingReact } = useFetchResource("/works", "react");

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

export default Works;