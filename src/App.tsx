import { FC } from 'react';
import  Header  from './components/Header/Header';
import { PageWrapper } from './components/PageWrapper/PageWrapper';
import './index.css';

export const App: FC = () => {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <PageWrapper />
      </div>
    </div>
  );
};
