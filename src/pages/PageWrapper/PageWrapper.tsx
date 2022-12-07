import React, {FC} from 'react';
import {Work, Skills, Contact, FirstScreen} from '../index'
import cl from './PageWrapper.module.css';

export const PageWrapper:FC = () => {
    return (
        <div className={cl.pageWrapper}>
            <FirstScreen/>
            <Skills/>
            <Work/>
            <Contact/>
        </div>
    );
};
