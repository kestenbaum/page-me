import React, {useEffect, useState} from 'react';
import BurgerMenu from "./components/sidebar/burger/BurgerMenu";
import Sidebar from "./components/sidebar/Sidebar";
import PageWrapper from "./components/PageWrapper";
import {useTypeSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {actionAddClassSidebar, actionRemoveClassSidebar} from "./store/reducer/sidebarReducer/actionSidebar";

const Layout = () => {
    const [state, setState] = useState<boolean>(false)
    const classes = useTypeSelector(item => item.sidebar.sidebarClass)
    const dispatch = useDispatch()

    useEffect(() => {
        if (state) {
            dispatch(actionAddClassSidebar('sidebarActive'))
        } else {
            dispatch(actionRemoveClassSidebar('sidebarActive'))
        }
    }, [state])

    return (
        <div className='layout'>
            <BurgerMenu state={state} setState={setState}/>
            <div className='container'>
                <div className='layout-wrapper'>
                    <Sidebar classes={classes}/>
                    <PageWrapper/>
                </div>
            </div>
        </div>
    );
};

export default Layout;