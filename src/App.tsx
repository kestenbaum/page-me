import React from 'react';
import './index.css';
import {PageWrapper} from "./pages/PageWrapper/PageWrapper";


const App = () => {
    return (
        <div className='app'>
            <div className="container">
                <PageWrapper/>
            </div>
        </div>
    );
};

export default App;