import React, {FC} from 'react';
import Icon from "../../UI/icon/Icon";
import {FaTelegramPlane} from 'react-icons/fa'

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
                    children={<FaTelegramPlane />}
                />
                <span className='contact-link'>Telegram: @alexey_vvn</span>
            </div>
        </div>
    );
};

export default Contact;