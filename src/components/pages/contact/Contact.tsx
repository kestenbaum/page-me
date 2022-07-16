import React, {FC, useState} from 'react';
import {FaTelegramPlane} from 'react-icons/fa'
import {BsPhone} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import ContactBlock from "./ContactBlock";

const Contact:FC = () => {

    const [state, setState] = useState([
        {id: 1, component: <FaTelegramPlane/>, contact: "Telegram: @alexey_vvn", href: "#"},
        {id: 2, component: <SiGmail/>, contact: "Gmail: kespa71for@gmail.com", href: "mailto:kespa71for@gmail.com"},
        {id: 3, component: <BsPhone/>, contact: "Mobile Phone: +380666053013", href: 'tel:380666053013'},
    ])

    return (
        <div className='contact-page'>
            <h2 className='person-title'>Contact</h2>
            {state.map(item =>
                <ContactBlock
                    key={item.id}
                    props={item}
                />
            )}
        </div>
    );
};

export default Contact;