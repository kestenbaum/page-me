import React, {FC} from 'react';
import {Work, About, Contact, FirstScreen} from '../pages'

export const PageWrapper:FC = () => {
    return (
        <div className='page-wrapper'>
            <FirstScreen/>
            <About/>
            <Work/>
            <Contact/>
        </div>
    );
};
