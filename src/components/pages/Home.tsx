import React, {FC} from 'react';
import {motion} from "framer-motion";

export const Home:FC = () => {
    return (
        <div className='home-page'>
            <motion.h1
                className='home-title'
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 2}}
            >
                hi everyone!!
            </motion.h1>
            <motion.p
                className='home-description'
                initial={{opacity: 0, x: -100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 2}}
            >
                I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.
            </motion.p>

        </div>
    );
};

