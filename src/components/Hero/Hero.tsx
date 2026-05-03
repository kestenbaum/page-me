import { FC } from "react";
import style from './Hero.module.css';

const INTRO_DATA: string[] = [
    "My name is Oleksii. I’m a Web Developer from Ukraine with over 2 years of experience. I believe in deep dedication to every project, where client satisfaction is the primary goal of my career.",
    "I specialize in HTML, CSS, and JavaScript, with a solid understanding of web hosting and infrastructure. I approach complex challenges with an analytical mindset, ensuring clear and efficient solutions while maintaining a professional and friendly partnership with my clients.",
    "You can rely on me for honest communication and high-quality digital services."
];

const Hero: FC = () => {
    return (
        <section className={style.wrapper} id="home">
            <h1 className={style.title}>Hi everyone,</h1>

            <div className={style.description}>
                {INTRO_DATA.map((text, idx) => (
                    <p key={idx} className={style.textParagraph}>
                        {text}
                    </p>
                ))}
            </div>

            <h2 className={style.footerNote}>Thank You.</h2>
        </section>
    );
};

export default Hero;