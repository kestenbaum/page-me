import React, {FC} from 'react';

import {useTypeSelector} from "../../hooks/useTypedSelector";
import {CardWork} from "../../components/CardWork/CardWork";
import cl from './Work.module.css';

export const Work:FC = () => {
    const getDataWork = useTypeSelector(item => item.workPage.works)
    const getDataReact = useTypeSelector(item => item.workPage.worksReact)

    return (
        <div className='work-page'>
            <h2 className={cl.title}>Portfolio</h2>
            <h3 className={cl.titleH2}>HTML/CSS/JS</h3>
            <div className='block-work'>
                {
                    getDataWork.length === 0
                        ? <h2 className='title-work'>Работы пока отсутствуют!</h2>
                        : getDataWork.map(item =>
                            <CardWork key={item.id} props={item}/>
                        )
                }
            </div>
            <h3 className={cl.titleH2}>React/Redux</h3>
            <div className='block-work'>
                {
                    getDataReact.length === 0
                        ? <h2 className='title-work'>Работы пока отсутствуют!</h2>
                        : getDataReact.map(item =>
                            <CardWork key={item.id} props={item}/>
                        )
                }
            </div>
        </div>
    );
};
