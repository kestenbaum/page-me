import { FC } from 'react';
import { Button } from '../UI/Button/Button';

import style from './Card.module.css';

const Card: FC<Card> = ({ link, img, title }) => {
  return (
    <div className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <img src={img} className={style.img} alt={'Image for card'} />
      <a href={link} target='_blank' rel='noreferrer'>
        <Button>Link to project</Button>
      </a>
    </div>
  );
};

export default Card;
