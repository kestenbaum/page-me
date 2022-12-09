import React, {FC} from 'react';
import {ContactBlock} from "../../components/ContactBlock/ContactBlock";
import {contactIcons} from "../../data/";
import cl from './Contact.module.css';

export const Contact:FC = () => {
    return (
        <div className={cl.wrapper} id='contact'>
            <h2 className={cl.title}>Contact</h2>
            {contactIcons.map(item =>
                <ContactBlock
                    key={item.id}
                    props={item}
                />
            )}
        </div>
    );
};
