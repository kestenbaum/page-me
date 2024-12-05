import { FC } from "react";
import style from './Intro.module.css';

const INTRO_DATE: string[] = [
    " my name's Oleksii. I'm from Ukraine and have been a web developer for the last 2 years. I\n" +
    "                    believe in strong dedication in each project of my clients and client's satisfaction is the\n" +
    "                    first concern in my career.",
    " I'm adequate in the prominent skills HTML, CSS, Javascript, different web hosting sectors\n" +
    "                    and so on. I can solve problems analytically and can face any complex situation with a\n" +
    "                    molive of fixing it with total vividness. Also, I handle customers with a friend like manner\n" +
    "                    keeping myself within professionalism.",
    "You can pick me with an assurance of honest and best services."
]

const Intro: FC = () => {
    return (
        <div className={style.wrapper} id='home'>
            <h1 className={style.title}>Hi everyone,</h1>
            <div className={style.description}>
                {!Array.isArray(INTRO_DATE)
                    ? []
                    : INTRO_DATE.map(((element, idx) => <p key={idx}>{element}</p>))}
            </div>
            <h2>Thank You.</h2>
        </div>
    );
};

export default Intro;