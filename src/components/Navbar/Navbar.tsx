import { useState } from 'react';
import {Link} from 'react-scroll';
import {HEADER_MENU} from "../../constants";
import style from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <menu className={!isOpen ? style.list : style.active}>
              {HEADER_MENU.length > 0 &&
                  HEADER_MENU.map(element => <Link
                  key={element.id}
                  to={element.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={style.item}
                  onClick={() => setIsOpen(false)}
              >
                <span className={style.link}>{element.link}</span>
              </Link>)}
            </menu>
            <button className={style.burger} onClick={() => setIsOpen(!isOpen)}></button>
        </>
    );
};

export default Navbar;