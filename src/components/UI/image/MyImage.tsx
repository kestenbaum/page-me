import React, {FC} from 'react';

interface imageProps extends React.ImgHTMLAttributes<any>{
    props?: any
}

const MyImage:FC<imageProps> = ({...props}) => {
    return (
        <img {...props}/>
    );
};

export default MyImage;