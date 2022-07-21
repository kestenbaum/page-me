import React, {FC} from 'react';
import Navigation from "./Navigation";

interface ISidebar {
    classes: any
}

const Sidebar:FC<ISidebar> = ({classes}) => {

    return (
        <div className={classes.join(' ')}>
           <Navigation />
        </div>
    );
};

export default Sidebar;