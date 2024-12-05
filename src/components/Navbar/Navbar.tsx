import {FC, useState} from 'react';
import {Link} from 'react-scroll';
import {HEADER_MENU} from "../../constants";

import style from './Navbar.module.css';

const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClickOpen () {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <menu className={!isOpen ? style.list : style.active}>
              {!Array.isArray(HEADER_MENU)
                  ? []
                  : HEADER_MENU.map(element => <Link
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
            <button className={style.burger} onClick={handleClickOpen}></button>
        </>
    );
};

export default Navbar;