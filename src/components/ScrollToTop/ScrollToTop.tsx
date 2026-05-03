import { FC, useState, useEffect } from 'react';
import style from './ScrollToTop.module.css';

const ScrollToTop: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`${style.scrollToTop} ${isVisible ? style.visible : ''}`} onClick={scrollToTop}>
            <button aria-label="Scroll to top">
                ↑
            </button>
        </div>
    );
};

export default ScrollToTop;