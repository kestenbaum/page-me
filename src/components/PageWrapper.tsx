import React, {FC} from 'react';
import {Work, Skills, Contact, FirstScreen} from '../pages'

export const PageWrapper:FC = () => {
    return (
        <div className='page-wrapper'>
            <FirstScreen/>
            <Skills/>
            <Work/>
            <Contact/>
        </div>
    );
};
