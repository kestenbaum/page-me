import React, {FC} from "react";
import useFetchContact from "../../hooks/useFetchContact";
import Loader from '../UI/Loader/Loader';

import style from './Contact.module.css';


export const Contact: FC = () => {
    const { data, isLoading, isError, error } = useFetchContact();

    return (
        <section className={style.wrapper} id='contact'>
            <>
                <h2 className={style.title}>Contact</h2>
                {isLoading ? (
                    <Loader/>
                ) : (
                    !Array.isArray(data) ? [] : data.map((item: Contact, idx: number) => (
                        <div
                            key={idx}
                            className={style.wrapper}
                        >
                            <a href={item.value} className={style.title} target='_blank'>
                                {item.title}
                            </a>
                        </div>
                    ))
                )}
                {isError && error && (
                    <span className={style.error}>
                        {error instanceof Error ? error.message : "An unknown error occurred."}
                    </span>
                )}
            </>
        </section>
    );
};
