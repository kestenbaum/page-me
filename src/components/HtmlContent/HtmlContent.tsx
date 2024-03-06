import React, {FC} from 'react';
import {CardWork} from "../CardWork/CardWork";
import {useQuery} from "react-query";
import {worksServices} from "../../services/works.services";

import cl from "../Work.module.css";

const HtmlContent: FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['html'],
        queryFn: () => worksServices.getWorks()
    })

    return (
        <div>
            <h3 className={cl.title__section}>HTML/CSS/JS</h3>
            <div className={cl.block}>
                {isLoading ?
                    <div className={cl.title}>Loading...</div>
                    :
                    data
                        ?.filter(item => item.category === 'web')
                        ?.map(item => <CardWork key={item._id} props={item}/>)
                }
            </div>
        </div>
    );
};

export default HtmlContent;