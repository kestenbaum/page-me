import React, {FC} from 'react';
import {PageWrapper} from "./pages/PageWrapper/PageWrapper";
import {Header} from "./components/Header/Header";
import './index.css';

export const App:FC = () => {
    return (
        <div className='app'>
            <div className="container">
                <Header/>
                <PageWrapper/>
            </div>
        </div>
    );
};
