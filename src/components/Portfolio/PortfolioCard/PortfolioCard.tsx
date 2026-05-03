import { FC } from 'react';
import style from './PortfolioCard.module.css';

interface SkillCardProps {
    title: string;
    stack: string;
    description: string;
    link: string;
}

const PortfolioCard: FC<SkillCardProps> = ({ title, stack, description, link }) => {
    return (
        <div className={style.card}>
            <h3 className={style.cardTitle}>{title}</h3>
            <p className={style.stack}><strong>Stack:</strong> {stack}</p>
            <p className={style.cardText}>{description}</p>
            <a href={link} target="_blank" rel="noreferrer" className={style.button}>
                View Projects
            </a>
        </div>
    );
};

export default PortfolioCard;