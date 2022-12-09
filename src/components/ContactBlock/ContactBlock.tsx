import React, {FC} from 'react';
import {motion} from "framer-motion";
import {IContactBlock} from "../../types";
import cl from './ContactBlock.module.css';

export const ContactBlock:FC<IContactBlock> = ({props}) => {
    return (
        <motion.div
            className={cl.wrapper}
            whileHover={{scale: 1.03}}
        >
            <a
                href={props.href}
                className={cl.title}
                target="_blank"
            >
                {props.contact}
            </a>
        </motion.div>
    );
};
