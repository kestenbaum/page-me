import { FC, useState, useEffect } from 'react';
import Logo from '../UI/Logo/Logo';
import Navbar from './Navbar/Navbar';
import style from './Header.module.css';

const Header: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`${style.header} ${isScrolled ? style.scrolled : ''}`}>
                <div className={style.container}>
                    <div className={style.wrapper}>
                        <Logo>Oleksii Vovnenko</Logo>
                        <Navbar />
                    </div>
                </div>
            </header>
            <div className={style.headerPlaceholder} />
        </>
    );
};

export default Header;