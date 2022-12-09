import React, {FC} from 'react';

import {workData} from "../../data";
import {CardWork} from "../../components/CardWork/CardWork";
import cl from './Work.module.css';

export const Work:FC = () => {
    const getDataWork = workData.works;
    const getDataReact = workData.worksReact;

    return (
        <div className={cl.wrapper} id='work'>
            <h2 className={cl.title}>Portfolio</h2>
            <h3 className={cl.titleH2}>HTML/CSS/JS</h3>
            <div className={cl.block}>
                {
                    getDataWork.length === 0
                        ? <h2 className={cl.title}>Работы пока отсутствуют!</h2>
                        : getDataWork.map(item =>
                            <CardWork key={item.id} props={item}/>
                        )
                }
            </div>
            <h3 className={cl.titleH2}>React/Redux</h3>
            <div className={cl.block}>
                {
                    getDataReact.length === 0
                        ? <h2 className={cl.title}>Работы пока отсутствуют!</h2>
                        : getDataReact.map(item =>
                            <CardWork key={item.id} props={item}/>
                        )
                }
            </div>
        </div>
    );
};