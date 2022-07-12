import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import Icon from "./UI/icon/Icon";
import {AiFillHome} from "react-icons/ai";
import {SiAboutdotme} from "react-icons/si";
import {MdOutlineContactMail, MdWork} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {Home} from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

const Navigation = () => {
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

            <NavLink to='/about'>
                <Icon
                    color={'white'}
                    children={<SiAboutdotme />}
                    size={'1.5em'}
                />
            </NavLink>
            <NavLink to='/work'>
                <Icon
                    color={'white'}
                    children={<MdWork />}
                    size={'1.5em'}
                />
            </NavLink>
            <NavLink to='/contact'>
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

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/work' element={<Work/>}/>
            </Routes>
        </div>
    );
};

export default Navigation;