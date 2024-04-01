import { FC } from 'react';
import { MyButton } from '../UI/button/MyButton';
import cl from './Card.module.css';

export const Card: FC<any> = ({ props }) => {
  const { title, img, link } = props;
  return (
    <div className={cl.card}>
      <h2 className={cl.title}>{title}</h2>
      <img src={img} className={cl.img} alt={''} />
      <a href={link} target='_blank' rel='noreferrer'>
        <MyButton>Link to project</MyButton>
      </a>
    </div>
  );
};
