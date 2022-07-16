import React, {FC} from 'react';
import {motion} from "framer-motion";
import Icon from "../../UI/icon/Icon";

interface IContactBlock {
    props: any
}

const ContactBlock:FC<IContactBlock> = (props) => {

    return (
        <motion.div
            className='contact-block'
            whileHover={{scale: 1.1}}
        >
            <Icon
                color={'white'}
                size={'1.5em'}
                children={props.props.component}
            />
            <a href={props.props.href} className='contact-link'>{props.props.contact}</a>
        </motion.div>
    );
};

export default ContactBlock;