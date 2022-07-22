import React, {FC} from 'react';
import {IImageInterface} from "../../../types";

const MyImage:FC<IImageInterface> = ({...props}) => {
    return (
        <img {...props}/>
    );
};

export default MyImage;