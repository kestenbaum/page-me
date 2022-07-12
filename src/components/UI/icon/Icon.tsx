import React, {FC} from 'react';
import {IconContext} from "react-icons";

interface IIcon {
    color: string
    children: any
}

const Icon:FC<IIcon> = (props) => {
    const {color, children} = props

    return (
        <IconContext.Provider value={{ color: color, className: "global-class-name" }}>
            <div>
                {children}
            </div>
        </IconContext.Provider>
    );
};

export default Icon;