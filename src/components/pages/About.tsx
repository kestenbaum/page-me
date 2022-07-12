import React, {FC} from 'react';
import avatar from './../../assets/images/me.png'
import {useTypeSelector} from "../../hooks/useTypedSelector";
import SkillItem from "../SkillItem";

const About:FC = () => {
    const data = useTypeSelector(item => item.skills.data)

    return (
        <div className='about'>
            <div className='person-block'>
                <div className='person-info'>
                    <div className='person-avatar'>
                        <img  className='avatar' src={avatar} alt='avatar'/>
                    </div>
                    <div className='person-document'>
                        <span className='person-title'>Name: Oleksii</span>
                        <span className='person-title'>Surname: Vovnenko</span>
                    </div>
                </div>
            <div className='skills-block'>
                <div className='person-title'>Skills:</div>
                <div>
                    {data.map(item => {
                       return <SkillItem
                            key={item.id}
                            skill={item.skill}
                            component={item.components}
                        />
                    })}
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;