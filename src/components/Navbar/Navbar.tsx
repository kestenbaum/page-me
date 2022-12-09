import React, {FC} from 'react';
import {Link} from "react-scroll";
import cl from './Navbar.module.css';

export const Navbar: FC = () => {
    return (
        <ul
            className={cl.list}
        >
            <Link
                to='home'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={cl.listItem}
            ><span className={cl.listLink}>Home</span></Link>
            <Link
                to='skill'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={cl.listItem}
            ><span className={cl.listLink}>Skills</span></Link>
            <Link
                to='work'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={cl.listItem}
            ><span className={cl.listLink}>Works</span></Link>
            <Link
                to='contact'
                smooth={true}
                offset={-70}
                duration={500}
                className={cl.listItem}
            ><span className={cl.listLink}>Contact</span></Link>
        </ul>
    );
};

