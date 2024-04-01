import React, { FC, useEffect } from 'react';
import HtmlContent from './HtmlContent/HtmlContent';
import ReactContent from './ReactContent/ReactContent';

import cl from './Work.module.css';

export const Work: FC = () => {
  return (
    <div className={cl.wrapper} id='work'>
      <h2 className={cl.title}>Portfolio</h2>
      <HtmlContent />
      <ReactContent />
    </div>
  );
};
