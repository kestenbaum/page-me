import React, {FC} from 'react';
import {useTypeSelector} from "../../../hooks/useTypedSelector";
import CardWork from "./CardWork";


const Work:FC = () => {

    const data = useTypeSelector(item => item.workPage.works)

    return (
        <div className='work-page'>
            <h2 className='title-work'>Portfolio</h2>
            <h3 className='title-work'>HTML/CSS/JS</h3>
            <div className='block-work'>
                {
                    data.length === 0
                        ? <h2 className='title-work'>Работы пока отсутствуют!</h2>
                        : data.map(item =>
                            <CardWork key={item.id} props={item}/>
                        )
                }
            </div>
            <h3 className='title-work'>React/Redux</h3>
            <div className='block-work'>
                <h2 className='title-work'>Работы пока отсутствуют!</h2>
            </div>
        </div>
    );
};

export default Work;