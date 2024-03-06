import React from 'react';
import {useQuery} from "react-query";
import {CardWork} from "../../../components/CardWork/CardWork";
import {worksServices} from "../../../services/works.services";

import cl from "../Work.module.css";
const ReactContent = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['react'],
        queryFn: () => worksServices.getWorksReact()
    })

    return (
        <div>
            <h3 className={cl.title__section}>React/Next</h3>
            <div className={cl.block}>
                {isLoading ?
                    <div className={cl.title}>Loading...</div>
                    :
                    data?.map(item => <CardWork key={item.id} props={item}/>) }
            </div>
        </div>
    );
};

export default ReactContent;