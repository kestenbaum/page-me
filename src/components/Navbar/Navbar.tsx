import React, {FC, useState} from 'react';
import {Link} from "react-scroll";
import cl from './Navbar.module.css';

export const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navigateClass = [cl.list]
    if (isOpen) navigateClass.push(cl.active)

    const toggleBurgerMenu = () => {
        setIsOpen(!isOpen)
        console.log(navigateClass)
        console.log(isOpen)
    }

    return (
        <>
            <ul
                className={navigateClass.join(' ')}
            >
                <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={cl.listItem}
                    onClick={() => setIsOpen(false)}
                ><span className={cl.listLink}>Home</span></Link>
                <Link
                    to='skill'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={cl.listItem}
                    onClick={() => setIsOpen(false)}
                ><span className={cl.listLink}>Skills</span></Link>
                <Link
                    to='work'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={cl.listItem}
                    onClick={() => setIsOpen(false)}
                ><span className={cl.listLink}>Works</span></Link>
                <Link
                    to='contact'
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={cl.listItem}
                    onClick={() => setIsOpen(false)}
                ><span className={cl.listLink}>Contact</span></Link>
            </ul>
            <button
                className={cl.burger}
                onClick={toggleBurgerMenu}
            >
                Burger Menu
            </button>
        </>
    );
};

