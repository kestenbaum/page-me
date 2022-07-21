import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import Icon from "../UI/icon/Icon";
import {AiFillHome} from "react-icons/ai";
import {SiAboutdotme} from "react-icons/si";
import {MdOutlineContactMail, MdWork} from "react-icons/md";
import {FaGithub} from "react-icons/fa";

const Navigation:FC = () => {

    return (
        <div className='nav'>
            <NavLink
                to='/'
            >
                    <Icon
                        color={'white'}
                        children={<AiFillHome />}
                        size={'1.5em'}
                    />
            </NavLink>

            <NavLink
                to='/about'
            >
                <Icon
                    color={'white'}
                    children={<SiAboutdotme />}
                    size={'1.5em'}
                />
            </NavLink>
            <NavLink
                to='/work'
            >
                <Icon
                    color={'white'}
                    children={<MdWork />}
                    size={'1.5em'}
                />
            </NavLink>
            <NavLink
                to='/contact'
            >
                <Icon
                    color={'white'}
                    children={<MdOutlineContactMail />}
                    size={'1.5em'}
                />
            </NavLink>
            <a href='https://github.com/kestenbaum'>
                <Icon
                    color={'white'}
                    size={'1.5em'}
                    children={<FaGithub/>}
                />
            </a>
        </div>
    );
};

export default Navigation;