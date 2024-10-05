import React, {FC} from 'react';

import {useQuery} from 'react-query';
import {getContacts} from '../../api/requests/contacts';
import Loader from '../Loader/Loader';
import style from './Contact.module.css';


export const Contact: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['contacts'],
        queryFn: () => getContacts().then((responce) => responce?.data)
    });

    return (
        <section className={style.wrapper} id='contact'>
            <h2 className={style.title}>Contact</h2>
            {isLoading ? (
                <Loader/>
            ) : (
                data?.data.length && data?.data.map((item, idx) => (
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
        </section>
    );
};
