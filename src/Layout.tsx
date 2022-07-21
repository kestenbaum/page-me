import React, {useEffect, useState} from 'react';
import BurgerMenu from "./components/sidebar/burger/BurgerMenu";
import Sidebar from "./components/sidebar/Sidebar";
import PageWrapper from "./components/PageWrapper";

const Layout = () => {

    const [state, setState] = useState<boolean>(false)
    const [classes, setClasses] = useState<any>(['sidebar'])

    useEffect(() => {
        if (state) {
            setClasses([...classes, 'sidebarActive'])
        } else {
            setClasses(['sidebar'])
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