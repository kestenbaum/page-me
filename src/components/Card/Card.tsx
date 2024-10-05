import { FC } from 'react';
import { Button } from '../Button/Button';

import cl from './Card.module.css';

export const Card: FC<Card> = ({ link, img, title }) => {
  return (
    <div className={cl.card}>
      <h2 className={cl.title}>{title}</h2>
      <img src={img} className={cl.img} alt={''} />
      <a href={link} target='_blank' rel='noreferrer'>
        <Button>Link to project</Button>
      </a>
    </div>
  );
};
