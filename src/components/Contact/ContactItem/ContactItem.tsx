import React from 'react';

import style from "./ContactItem.module.css";

const ContactItem = ({ item, idx}: { item:ContactItem, idx:number | string }) => {
    return (
        <li
            key={idx}
            className={style.wrapper}
        >
            <a href={item.value} className={style.contact} target='_blank'>
                {item.title}
            </a>
        </li>
    );
};

export default ContactItem;