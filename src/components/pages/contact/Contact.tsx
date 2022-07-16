import React, {FC} from 'react';
import Icon from "../../UI/icon/Icon";
import {FaTelegramPlane} from 'react-icons/fa'
import {BsPhone} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const Contact:FC = () => {
    return (
        <div className='contact-page'>
            <h2 className='person-title'>Contact</h2>
            <div className='contact-block'>
                <Icon
                    color={'white'}
                    size={'1.5em'}
                    children={<FaTelegramPlane />}
                />
                <span className='contact-link'>Telegram: @alexey_vvn</span>
            </div>
            <div className='contact-block'>
                <Icon
                    color={'white'}
                    size={'1.5em'}
                    children={<SiGmail />}
                />
                <a href="mailto:kespa71for@gmail.com" className='contact-link'>Gmail: kespa71for@gmail.com</a>
            </div>
            <div className='contact-block'>
                <Icon
                    color={'white'}
                    size={'1.5em'}
                    children={<BsPhone />}
                />
                <a href='tel:380666053013' className='contact-link'>Phone: +380666053013</a>
            </div>
        </div>
    );
};

export default Contact;