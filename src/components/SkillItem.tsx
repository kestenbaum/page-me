import React, {FC} from 'react';
import {ISkillItem} from "../types";

const SkillItem:FC<ISkillItem> = (props) => {
    return (
        <div className='skill-item'>
            <span className='person-title'>{props.skill}</span>
        </div>
    );
};

export default SkillItem;