import React, {useEffect, useState} from 'react';
import {PageWrapper} from "./components/PageWrapper";
import {useTypeSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {actionAddClassSidebar, actionRemoveClassSidebar} from "./store/reducer/sidebarReducer/actionSidebar";

const Layout = () => {
    {/*---- State Burger Menu ----*/}
    const [active, setActive] = useState<boolean>(false)

    const classes = useTypeSelector(item => item.sidebar.sidebarClass)

    const dispatch = useDispatch()

    useEffect(() => {
        if (active) {
            dispatch(actionAddClassSidebar('sidebarActive'))
        } else {
            dispatch(actionRemoveClassSidebar('sidebarActive'))
        }
    }, [active])

    return (
        <div className='layout'>
            <div className='container'>
                <div className='layout-wrapper'>
                    <PageWrapper/>
                </div>
            </div>
        </div>
    );
};

export default Layout;