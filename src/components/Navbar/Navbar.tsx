import React, {FC} from 'react';
import cl from './Navbar.module.css';
import {Logo} from "../Logo/Logo";
import {Link} from "react-scroll";

export const Navbar:FC = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.wrapper}>
                    <Logo/>
                    <ul className={cl.list}>
                        <Link
                            to='home'
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className={cl.listItem}
                        ><span className={cl.listLink}>Home</span></Link>
                        <Link
                            to='skill'
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className={cl.listItem}
                        ><span className={cl.listLink}>Skills</span></Link>
                        <Link
                            to='work'
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            className={cl.listItem}
                        ><span className={cl.listLink}>Works</span></Link>
                        <Link
                            to='contact'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className={cl.listItem}
                        ><span className={cl.listLink}>Contact</span></Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};

