import { FC } from 'react';
import { Contact, FirstScreen, Skills, Work } from '../index';
import cl from './PageWrapper.module.css';

export const PageWrapper: FC = () => {
  return (
    <div className={cl.pageWrapper}>
      <FirstScreen />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};
