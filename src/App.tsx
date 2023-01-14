import { FC } from 'react';
import { Header } from "./components/Header/Header";
import './index.css';
import { PageWrapper } from "./pages/PageWrapper/PageWrapper";

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
