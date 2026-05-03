import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import style from './Hero.module.css';
import Documents from '@/components/Documents/Documents';

const Hero: FC = () => {
  const { t } = useTranslation();
  const introData = t('hero.intro', { returnObjects: true }) as string[];

  return (
    <section className={style.wrapper} id="home">
      <h1 className={style.title}>{t('hero.title')}</h1>

      <div className={style.description}>
        {Array.isArray(introData) && introData.map((text, idx) => <p key={idx}>{text}</p>)}
      </div>

      <h2>{t('hero.thanks')}</h2>
      <Documents />
    </section>
  );
};

export default Hero;
