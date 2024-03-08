import React, {FC} from 'react';
import {useQuery} from "react-query";
import {contactServices} from "../../services/contact.services";

import {ContactBlock} from "./ContactBlock/ContactBlock";

import cl from './Contact.module.css';
import Loader from "../Loader/Loader";

export const Contact: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['contact'],
        queryFn: () => contactServices.getContact()
    })

    return (
        <section className={cl.wrapper} id='contact'>
            <h2 className={cl.title}>Contact</h2>
            {isLoading ?
               <Loader/>
                :
                data?.map(item =>
                    <ContactBlock
                        key={item._id}
                        props={item}
                    />
                )
            }
        </section>
    );
};
