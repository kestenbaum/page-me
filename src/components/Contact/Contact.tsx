import React, { FC } from 'react';

import { useQuery } from 'react-query';
import { getContacts } from '../../api/requests/contacts';
import { ContactBlock } from './ContactBlock/ContactBlock';

import Loader from '../UI/Loader/Loader';
import cl from './Contact.module.css';

export const Contact: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => getContacts().then((responce) => responce?.data)
  });

  return (
    <section className={cl.wrapper} id='contact'>
      <h2 className={cl.title}>Contact</h2>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data.map((item) => (
          <ContactBlock key={item._id} title={item.title} value={item.value} />
        ))
      )}
    </section>
  );
};
