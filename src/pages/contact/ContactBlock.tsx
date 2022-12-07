import React, {FC} from 'react';
import {motion} from "framer-motion";
import Icon from "../../components/UI/icon/Icon";
import {IContactBlock} from "../../types";

const ContactBlock:FC<IContactBlock> = ({props}) => {
    return (
        <motion.div
            className='contact-block'
            whileHover={{scale: 1.1}}
        >
            <Icon
                color={'white'}
                size={'1.5em'}
                children={props.component}
            />
            <a href={props.href} className='contact-link'>{props.contact}</a>
        </motion.div>
    );
};

export default ContactBlock;