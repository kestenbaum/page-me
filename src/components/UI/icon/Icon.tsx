import React, {FC} from 'react';
import {IconContext} from "react-icons";
import {IIcon} from "../../../types";

const Icon:FC<IIcon> = ({color, children, size}) => {
    return (
        <IconContext.Provider value={{ color: color, size: size, className: "global-class-name" }}>
            <div>
                {children}
            </div>
        </IconContext.Provider>
    );
};

export default Icon;