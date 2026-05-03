import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

import style from './Navbar.module.css';

const HEADER_MENU = [
  { id: 1, to: 'home', key: 'nav.home' },
  { id: 2, to: 'skill', key: 'nav.skills' },
  { id: 3, to: 'portfolio', key: 'nav.works' },
  { id: 4, to: 'contact', key: 'nav.contact' },
];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`${style.nav} ${isOpen ? style.active : ''}`}>
        <div className={style.list}>
          {HEADER_MENU.map(({ id, to, key }) => (
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
              <span className={style.link}>{t(key)}</span>
            </Link>
          ))}
        </div>
        <div className={style.langContainer}>
          <button
            className={`${style.langBtn} ${i18n.language === 'en' ? style.langActive : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
          <span className={style.divider}>/</span>
          <button
            className={`${style.langBtn} ${i18n.language === 'de' ? style.langActive : ''}`}
            onClick={() => changeLanguage('de')}
          >
            DE
          </button>
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
