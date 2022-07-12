import React, {FC} from 'react';
import Icon from "./UI/icon/Icon";

interface ISkillItem {
    skill: string
    component: any
}

const SkillItem:FC<ISkillItem> = (props) => {

    return (
        <div className='skill-item'>
            <Icon
                color={'white'}
                size={'1.5em'}
                children={props.component}
            />
            <span className='person-title'>{props.skill}</span>
        </div>
    );
};

export default SkillItem;