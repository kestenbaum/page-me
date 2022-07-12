import React from 'react';
import avatar from './../../assets/images/me.png'


const About = () => {
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

            </div>
            </div>
        </div>
    );
};

export default About;