import {INTRO_DATE} from "../../constants";
import style from './Intro.module.css';

const Intro = () => {
    return (
        <div className={style.wrapper} id='home'>
            <h1 className={style.title}>Hi everyone,</h1>
            <div className={style.description}>
                {INTRO_DATE.map(((element, idx) => <p key={idx}>{element}</p>))}
            </div>
            <h2>Thank You.</h2>
        </div>
    );
};

export default Intro;