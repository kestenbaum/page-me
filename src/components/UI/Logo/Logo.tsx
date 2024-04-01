import React, { FC } from 'react';
import { Link } from 'react-scroll';
import logo from '../../../assets/logo.png';
import cl from './Logo.module.css';

export const Logo: FC = () => {
  return (
    <Link to={'home'} offset={-60} duration={500} spy={true} smooth={true} className={cl.logo}>
      <img src={logo} alt='logo' className={cl.logoImg} />
      Kestenbaum
    </Link>
  );
};
