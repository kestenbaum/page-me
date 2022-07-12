import React, {FC} from 'react';
import Navigation from "./Navigation";


const Sidebar:FC = () => {
    return (
        <div className='sidebar'>
           <Navigation/>
        </div>
    );
};

export default Sidebar;