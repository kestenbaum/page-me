import { FC } from 'react';
import { Logo } from '../UI/Logo/Logo';
import Navbar  from '../Navbar/Navbar';

import cl from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <div className={cl.wrapper}>
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};
