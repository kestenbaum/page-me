import { FC } from 'react';
import Section from '../UI/Section/Section';
import style from './Skills.module.css';

const SKILLS_CATEGORIES = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
        color: "#007bff"
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "Nest.js", "MySQL", "PostgreSQL"],
        color: "#28a745"
    },
    {
        title: "Methods & Tools",
        skills: ["Git", "Jira", "Docker", "Postman", "WebStorm", "VS Code", "Figma"],
        color: "#ffc107"
    }
];

const Skills: FC = () => {
    return (
        <Section id="skill" title="Tech Stack">
            <div className={style.grid}>
                {SKILLS_CATEGORIES.map((cat, idx) => (
                    <div key={idx} className={style.categoryCard}>
                        <h3 className={style.categoryTitle} style={{ color: cat.color }}>
                            {cat.title}
                        </h3>
                        <div className={style.skillsList}>
                            {cat.skills.map((skill) => (
                                <span key={skill} className={style.skillBadge}>
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;