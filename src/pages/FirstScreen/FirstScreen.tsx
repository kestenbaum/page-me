import React, {FC} from 'react';
import cl from './FirstScreen.module.css';

export const FirstScreen:FC = () => {
    return (
        <div className={cl.wrapper}>
            <h1 className={cl.title}>Hi everyone</h1>
            <p className={cl.description}>My name's Oleksii. I'm from Ukraine and have been a web developer for the last 2 years. I  believe in strong
                dedication in each project of my clients and client's satisfaction is the first concern in my career.
            </p>
            <p className={cl.description}>I'm adequate in the prominent skills HTML, CSS, Javascript, different web hosting sectors and so on. I can
                solve problems analytically and can face any complex situation with a molive of fixing it with total
                vividness. Also, I handle customers with a friend like manner keeping myself within professionalism.
            </p>
            <p className={cl.description}>
                You can pick me with an assurance of honest and best services.
            </p>
            <h2 className={cl.titleH2}>Thank You.</h2>
        </div>
    );
};

