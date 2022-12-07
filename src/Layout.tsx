import React, {FC} from 'react';
import {PageWrapper} from "./pages/PageWrapper/PageWrapper";


export const Layout:FC = () => {
    return (
        <div className='layout'>
            <div className='container'>
                <div className='layout-wrapper'>
                    <PageWrapper/>
                </div>
            </div>
        </div>
    );
};
