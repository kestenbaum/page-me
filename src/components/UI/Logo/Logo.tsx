import React, { FC } from 'react';
import { Link } from 'react-scroll';
import logo from '../../../assets/logo.png';

import style from './Logo.module.css';

const Logo: FC<{ children:string }> = ({ children }) => {
  return (
    <Link
        to={'home'}
        offset={-60}
        duration={500}
        spy={true}
        smooth={true}
        className={style.logo}
    >
      <img src={logo} alt='logo' className={style.logoImg} />
        {children}
    </Link>
  );
};

export default Logo;