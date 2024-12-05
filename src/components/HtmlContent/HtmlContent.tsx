import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getWorks } from '../../api/requests/works';

import { Card } from '../Card/Card';
import Loader from '../UI/Loader/Loader';

import cl from '../Work/Work.module.css';

const HtmlContent: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['html'],
    queryFn: () => getWorks().then((responce) => responce.data)
  });

  return (
    <div>
      <h3 className={cl.title__section}>HTML/CSS/JS</h3>
      <div className={cl.block}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.data
            ?.filter((item) => item.category === 'web')
            ?.map((item) => (
              <Card key={item._id} link={item.link} title={item.title} img={item.img} />
            ))
        )}
      </div>
    </div>
  );
};

export default HtmlContent;
