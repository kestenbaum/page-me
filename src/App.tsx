import React from 'react';
import './scss/index.css'
import Sidebar from "./components/Sidebar";
import PageWrapper from "./components/PageWrapper";


const App = () => {
    return (
        <div className='app'>
            <div className='layout'>
                <div className='container'>
                    <div className='layout-wrapper'>
                        <Sidebar/>
                        <PageWrapper/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;