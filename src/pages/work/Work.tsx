import React, {FC} from 'react';
import {useTypeSelector} from "../../hooks/useTypedSelector";
import CardWork from "./CardWork";

const Work:FC = () => {
    {/*---- Get works----*/}
    const dataWork = useTypeSelector(item => item.workPage.works)
    const dataReact = useTypeSelector(item => item.workPage.worksReact)

    return (
        <div className='work-page'>
            <h2 className='title-work'>Portfolio</h2>
            <h3 className='title-work'>HTML/CSS/JS</h3>
            <div className='block-work'>
                {
                    dataWork.length === 0
                        ? <h2 className='title-work'>Работы пока отсутствуют!</h2>
                        : dataWork.map(item =>
                            <CardWork key={item.id} props={item}/>
                        )
                }
            </div>
            <h3 className='title-work'>React/Redux</h3>
            <div className='block-work'>
                {
                    dataReact.length === 0
                        ? <h2 className='title-work'>Работы пока отсутствуют!</h2>
                        : dataReact.map(item =>
                            <CardWork key={item.id} props={item}/>
                        )
                }
            </div>
        </div>
    );
};

export default Work;