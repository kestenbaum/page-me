import React, {FC} from 'react';
import CardWork from "./CardWork";

const Work:FC = () => {
    return (
        <div className='work-page'>
            <h2 className='title-work'>Portfolio</h2>
            <h3 className='title-work'>HTML/CSS/JS</h3>
            <div className='block-work'>
                <CardWork/>
                <CardWork/>
                <CardWork/>
                <CardWork/>
                <CardWork/>
            </div>
            <h3 className='title-work'>React/redux</h3>
            <div className='block-work'>
                <CardWork/>
                <CardWork/>
                <CardWork/>
                <CardWork/>
                <CardWork/>
            </div>
        </div>
    );
};

export default Work;