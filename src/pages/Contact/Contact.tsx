import React, {FC} from 'react';
import {useQuery} from "react-query";
import {contactServices} from "../../services/contact.services";

import {ContactBlock} from "../../components/ContactBlock/ContactBlock";

import cl from './Contact.module.css';

export const Contact: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['contact'],
        queryFn: () => contactServices.getContact()
    })

    return (
        <section className={cl.wrapper} id='contact'>
            <h2 className={cl.title}>Contact</h2>
            {isLoading ?
                <div>Loading...</div>
                :
                data?.map(item =>
                    <ContactBlock
                        key={item.id}
                        props={item}
                    />
                )
            }
        </section>
    );
};
