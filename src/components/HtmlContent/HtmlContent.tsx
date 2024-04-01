import React, { FC } from 'react';
import { Card } from '../Card/Card';
import { useQuery } from 'react-query';
import { worksServices } from '../../services/works.services';

import cl from '../Work.module.css';
import Loader from '../Loader/Loader';

const HtmlContent: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['html'],
    queryFn: () => worksServices.getWorks()
  });

  return (
    <div>
      <h3 className={cl.title__section}>HTML/CSS/JS</h3>
      <div className={cl.block}>
        {isLoading ? (
          <Loader />
        ) : (
          data
            ?.filter((item) => item.category === 'web')
            ?.map((item) => <Card key={item._id} props={item} />)
        )}
      </div>
    </div>
  );
};

export default HtmlContent;
