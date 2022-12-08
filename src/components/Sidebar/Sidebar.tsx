import React, {FC, useState} from 'react';
import {MyButton} from "../UI/button/MyButton";
import cl from './Sidebar.module.css';

export const Sidebar:FC = () => {
    const [isOpen ,setIsOpen] = useState<boolean>(false)
    const rootClasses = [cl.wrapper]
    isOpen && rootClasses.push(cl.wrapperActive)

    return (
        <>
            <div className={cl.btn}>
                <MyButton
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Menu
                </MyButton>
            </div>
        <div
            className={rootClasses.join(' ')}
        >
            <a href="#home" className={cl.link} onClick={() => setIsOpen(false)}>Home</a>
            <a href="#" className={cl.link} onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#" className={cl.link} onClick={() => setIsOpen(false)}>Work</a>
            <a href="#" className={cl.link} onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        </>
    );
};
