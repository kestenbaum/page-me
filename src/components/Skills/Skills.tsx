import { useQuery } from 'react-query';
import { getSkills } from '../../api/requests/skills';
import Loader from '../UI/Loader/Loader';
import style from './Skills.module.css';

export const Skills = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: () => getSkills().then((responce) => responce.data)
  });

  return (
    <div className={style.wrapper}>
      <h2 className={style.title} id='skill'>
        My skills
      </h2>
      <section className={style.cardBlock}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.data.map((icon, idx) => (
              <div className={style.col} key={idx}>
                  <div className={style.cardWrapper}>
                      <img className={style.cardIcon} src={process.env.PUBLIC_URL + icon.img} alt='icon'/>
                      <h2 className={style.title}>{icon.title}</h2>
                  </div>
              </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Skills;