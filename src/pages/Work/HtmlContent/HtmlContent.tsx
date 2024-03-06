import React, {FC} from 'react';
import {CardWork} from "../../../components/CardWork/CardWork";
import cl from "../Work.module.css";
import {useQuery} from "react-query";
import {worksServices} from "../../../services/works.services";

const HtmlContent:FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['html'],
        queryFn: () => worksServices.getWorksHTML()
    })

    return (
        <div>
            <h3 className={cl.title__section}>HTML/CSS/JS</h3>
            <div className={cl.block}>
                {isLoading ?
                    <div className={cl.title}>Loading...</div>
                    :
                    data?.map(item =>
                        <CardWork key={item.id} props={item}/>
                    )
                }
            </div>
        </div>
    );
};

export default HtmlContent;