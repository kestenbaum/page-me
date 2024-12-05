import { FC } from 'react';
import Logo from '../UI/Logo/Logo';
import Navbar from './Navbar/Navbar';

import style from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <Logo children="Kestenbaum"/>
                    <Navbar/>
                </div>
            </div>
        </header>
    );
};

export default Header;
