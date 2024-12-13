import { FC } from 'react';
import { Button } from '../UI/Button/Button';

import style from './Card.module.css';

const Card: FC<WorkItem> = ({ link, img, title }) => {
  return (
    <li className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <div
          className={style.wrapper}
          style={{ backgroundImage: `url(${img})` }}
      >
        <img src={img} className={style.img} alt={'Image for card'} />
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <Button>Link to project</Button>
      </a>
    </li>
  );
};

export default Card;
