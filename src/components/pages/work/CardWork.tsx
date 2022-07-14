import React from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "../../UI/button/MyButton";

const CardWork = () => {
    return (
        <div className='card-work'>
            <h2 className='title-card'>Title</h2>
            <NavLink to='/' className='link'>
                <MyButton>Link to project</MyButton>
            </NavLink>
        </div>
    );
};

export default CardWork;