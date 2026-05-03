import { FC, ReactNode } from 'react';

import style from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ id, title, children, className }) => {
  return (
    <section id={id} className={`${style.section} ${className || ''}`}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.content}>{children}</div>
    </section>
  );
};

export default Section;
