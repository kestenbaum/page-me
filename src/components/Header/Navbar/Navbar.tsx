import { FC, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import style from './Navbar.module.css';

const HEADER_MENU = [
    { id: 1, to: "home", link: "Home" },
    { id: 2, to: "skill", link: "Skills" },
    { id: 3, to: "portfolio", link: "Portfolio" },
    { id: 4, to: "contact", link: "Contact" }
];

const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            <nav className={`${style.nav} ${isOpen ? style.active : ''}`}>
                <div className={style.list}>
                    {HEADER_MENU.map(({ id, to, link }) => (
                        <Link
                            key={id}
                            to={to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={style.item}
                            activeClass={style.activeLink}
                            onClick={() => setIsOpen(false)}
                        >
                            <span className={style.link}>{link}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            <button
                onClick={toggleMenu}
                className={`${style.burger} ${isOpen ? style.burgerOpen : ''}`}
                aria-label="Toggle menu"
            >
                <span className={style.burgerLine}></span>
            </button>
        </>
    );
};

export default Navbar;