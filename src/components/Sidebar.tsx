import React, {FC} from 'react';
import {IconContext} from "react-icons";
import {AiFillHome} from "react-icons/ai";
import {SiAboutdotme} from "react-icons/si";
import {MdWork} from "react-icons/md";
import {MdOutlineContactMail} from 'react-icons/md'


const Sidebar:FC = () => {
    return (
        <div className='sidebar'>
            <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <div>
                    <AiFillHome />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <div>
                    <SiAboutdotme />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <div>
                    <MdWork />
                </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <div>
                    <MdOutlineContactMail />
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default Sidebar;