import React, {FC} from 'react';
import cl from './Sidebar.module.css';

export const Sidebar:FC = () => {
    return (
        <div className={cl.wrapper} style={{width: "200px"}}>
            <a href="#" className={cl.link}>Home</a>
            <a href="#" className={cl.link}>Skills</a>
            <a href="#" className={cl.link}>Work</a>
            <a href="#" className={cl.link}>Contact</a>
        </div>
    );
};
