import React, {FC} from 'react';
import {IconContext} from "react-icons";

interface IIcon {
    color: string
    children: any
    size: string
}

const Icon:FC<IIcon> = (props) => {
    const {color, children, size} = props

    return (
        <IconContext.Provider value={{ color: color, size: size, className: "global-class-name" }}>
            <div>
                {children}
            </div>
        </IconContext.Provider>
    );
};

export default Icon;