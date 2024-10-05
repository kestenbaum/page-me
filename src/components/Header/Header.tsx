import {FC} from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

import cl from './Header.module.css';

const Header: FC = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <div className={cl.wrapper}>
                    <Logo children="Kestenbaum"/>
                    <Navbar/>
                </div>
            </div>
        </header>
    );
};

export default Header;
