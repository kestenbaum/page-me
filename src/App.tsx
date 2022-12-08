import React, {FC} from 'react';
import './index.css';
import {PageWrapper} from "./pages/PageWrapper/PageWrapper";
import {Sidebar} from "./components/Sidebar/Sidebar";


export const App:FC = () => {
    return (
        <div className='app'>
            <Sidebar/>
            <div className="container">
                <PageWrapper/>
            </div>
        </div>
    );
};
