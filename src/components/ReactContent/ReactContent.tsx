import React from 'react';
import { useQuery } from 'react-query';
import { getWorks } from '../../api/requests/works';

import { Card } from '../Card/Card';
import Loader from '../UI/Loader/Loader';

import cl from '../Work/Work.module.css';

const ReactContent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['react'],
    queryFn: () => getWorks().then((responce) => responce.data)
  });

  return (
    <div>
      <h3 className={cl.title__section}>React/Next</h3>
      <div className={cl.block}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.data
            ?.filter((item) => item.category === 'react')
            ?.map((item) => (
              <Card key={item._id} img={item.img} link={item.link} title={item.title} />
            ))
        )}
      </div>
    </div>
  );
};

export default ReactContent;
