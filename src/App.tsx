import React, {FC} from 'react';
import './index.css';
import {PageWrapper} from "./pages/PageWrapper/PageWrapper";

export const App:FC = () => {
    return (
        <div className='app'>
            <div className="container">
                <PageWrapper/>
            </div>
        </div>
    );
};
