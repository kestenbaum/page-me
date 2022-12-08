import React, {FC} from 'react';
import cl from './Navbar.module.css';
import {Logo} from "../Logo/Logo";

export const Navbar:FC = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.wrapper}>
                    <Logo/>
                    <ul className={cl.list}>
                        <li
                            className={cl.listItem}
                        ><a href="#" className={cl.listLink}>Home</a></li>
                        <li
                            className={cl.listItem}
                        ><a href="#" className={cl.listLink}>Skills</a></li>
                        <li
                            className={cl.listItem}
                        ><a href="#" className={cl.listLink}>Works</a></li>
                        <li
                            className={cl.listItem}
                        ><a href="#" className={cl.listLink}>Contact me</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

