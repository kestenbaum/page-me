import React, { FC } from 'react';
import { motion } from 'framer-motion';

import cl from './ContactBlock.module.css';

export const ContactBlock: FC<Contact> = ({ value, title }) => {
  return (
    <motion.div className={cl.wrapper} whileHover={{ scale: 1.03 }}>
      <a href={value} className={cl.title} target='_blank'>
        {title}
      </a>
    </motion.div>
  );
};
