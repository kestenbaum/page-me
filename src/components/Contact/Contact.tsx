import React, { FC } from "react";
import { renderItemsList } from "@/helpers";
import Loader from '../UI/Loader/Loader';
import useFetchResource from "../../hooks/useFetchResource";
import ContactItem from "@/components/Contact/ContactItem/ContactItem";

import style from './Contact.module.css';


const Contact: FC = () => {
    const { data, isLoading, isError, error } = useFetchResource<ContactItem[]>("/contacts", "contact");
    const contactList = renderItemsList(data?.data, ContactItem);

    return (
        <div className={style.wrapper} id='contact'>
                <h2 className={style.title}>Contact</h2>
                { isLoading && <Loader /> }
                <ul className={style.list}>
                    { contactList }
                </ul>
                { isError && <p>{error?.message}</p> }
        </div>
    );
};

export default Contact;
