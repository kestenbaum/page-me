import React, {FC} from 'react';
import Icon from "../../UI/icon/Icon";
import {FaTelegramPlane} from 'react-icons/fa'
import {BsPhone} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {motion} from 'framer-motion'

const Contact:FC = () => {
    return (
        <div className='contact-page'>
            <h2 className='person-title'>Contact</h2>
            <motion.div
                className='contact-block'
                whileHover={{scale: 1.1}}
            >
                <Icon
                    color={'white'}
                    size={'1.5em'}
                    children={<FaTelegramPlane />}
                />
                <span className='contact-link'>Telegram: @alexey_vvn</span>
            </motion.div>
            <motion.div
                whileHover={{scale: 1.1}}
                className='contact-block'
            >
                <Icon
                    color={'white'}
                    size={'1.5em'}
                    children={<SiGmail />}
                />
                <a href="mailto:kespa71for@gmail.com" className='contact-link'>Gmail: kespa71for@gmail.com</a>
            </motion.div>
            <motion.div
                className='contact-block'
                whileHover={{scale: 1.1}}
            >
                <Icon
                    color={'white'}
                    size={'1.5em'}
                    children={<BsPhone />}
                />
                <a href='tel:380666053013' className='contact-link'>Phone: +380666053013</a>
            </motion.div>
        </div>
    );
};

export default Contact;