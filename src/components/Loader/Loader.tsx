import React, { FC } from 'react';

import style from './Loader.module.css';
const Loader: FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.logo}></div>
      <div className={style.text}>Loading...</div>
    </div>
  );
};

export default Loader;
