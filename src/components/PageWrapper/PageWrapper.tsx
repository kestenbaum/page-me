import React, { FC } from 'react';

import cl from './PageWrapper.module.css';
import Intro from "../Intro/Intro";
import {Skills} from "../Skills/Skills";
import {Work} from "../Work";
import {Contact} from "../Contact/Contact";

export const PageWrapper: FC = () => {
  return (
    <div className={cl.pageWrapper}>
      <Intro />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};
