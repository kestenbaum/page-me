import React, {FC} from 'react';
import {Work, About, Contact} from '../pages'

export const PageWrapper:FC = () => {
    return (
        <div className='page-wrapper'>
            <About/>
            <Work/>
            <Contact/>
        </div>
    );
};
