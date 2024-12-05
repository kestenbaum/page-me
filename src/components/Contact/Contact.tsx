import React, { FC } from "react";
import Loader from '../UI/Loader/Loader';
import useFetchResource from "../../hooks/useFetchResource";

import style from './Contact.module.css';


const Contact: FC = () => {
    const { data, isLoading, isError, error } = useFetchResource("/contacts", "contact");

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

export default Contact;
