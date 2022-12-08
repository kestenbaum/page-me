import React, {FC} from 'react';
import {PageWrapper} from "./pages/PageWrapper/PageWrapper";
import './index.css';
import {Navbar} from "./components/Navbar/Navbar";

export const App:FC = () => {
    return (
        <div className='app'>
            <div className="container">
                <Navbar/>
                <PageWrapper/>
            </div>
        </div>
    );
};
