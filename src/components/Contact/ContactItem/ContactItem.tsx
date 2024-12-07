import React from 'react';
import style from "@/components/Contact/Contact.module.css";

const ContactItem = ({ item, idx}: {item:ContactItem, idx:number | string }) => {
    return (
        <section
            key={idx}
            className={style.wrapper}
        >
            <a href={item.value} className={style.title} target='_blank'>
                {item.title}
            </a>
        </section>
    );
};

export default ContactItem;