import React from 'react';
import { useQuery } from 'react-query';
import { Card } from '../Card/Card';
import { worksServices } from '../../services/works.services';

import cl from '../Work.module.css';
import Loader from '../Loader/Loader';

const ReactContent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['react'],
    queryFn: () => worksServices.getWorks()
  });

  return (
    <div>
      <h3 className={cl.title__section}>React/Next</h3>
      <div className={cl.block}>
        {isLoading ? (
          <Loader />
        ) : (
          data
            ?.filter((item) => item.category === 'react')
            ?.map((item) => <Card key={item._id} props={item} />)
        )}
      </div>
    </div>
  );
};

export default ReactContent;
