import React, { FC } from 'react';
import Section from "@/components/UI/Section/Section";
import style from './Portfolio.module.css';
import PortfolioCard from "@/components/Portfolio/PortfolioCard/PortfolioCard";
import { useTranslation } from "react-i18next";


const Portfolio_DATA = [
    {
        id: 1,
        title: "Frontend Development",
        stack: "HTML5, CSS3, JavaScript (ES6+)",
        description: "Building responsive, high-performance websites with clean and semantic code.",
        link: "https://github.com/your-profile"
    },
    {
        id: 2,
        title: "React Ecosystem",
        stack: "React, Hooks, Redux, React Router",
        description: "Developing complex Single Page Applications (SPA) with efficient state management.",
        link: "https://github.com/your-profile"
    },
    {
        id: 3,
        title: "Modern Styling",
        stack: "CSS Modules, SCSS, Tailwind CSS",
        description: "Creating beautiful, maintainable user interfaces with modular and scalable styles.",
        link: "https://github.com/your-profile"
    },
    {
        id: 4,
        title: "Deployment & Hosting",
        stack: "Vercel, Netlify, Firebase, GitHub Pages",
        description: "Managing CI/CD pipelines and deploying web applications to various hosting platforms.",
        link: "https://github.com/your-profile"
    }
];

const Portfolio: FC = () => {
    const { t } = useTranslation();

    return (
        <Section id="portfolio" title={t('title.portfolio')}>
            <div className={style.grid}>
                {Portfolio_DATA.map(skill => (
                    <PortfolioCard
                        key={skill.id}
                        title={skill.title}
                        stack={skill.stack}
                        description={skill.description}
                        link={skill.link}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Portfolio;