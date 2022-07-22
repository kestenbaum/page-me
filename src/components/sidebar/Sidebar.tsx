import React, {FC} from 'react';
import Navigation from "./Navigation";
import {ISidebar} from "../../types";

const Sidebar:FC<ISidebar> = ({classes}) => {
    return (
        <div className={classes.join(' ')}>
           <Navigation />
        </div>
    );
};

export default Sidebar;