import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar, MobileNav } from "../../components";
// import { Footer } from "../Footer/Footer";
import './index.scss';

// import { WatchDimensions } from '../../components';

const Layout = () =>
{ 
    return (
        <div>
            <Sidebar />
            {/* <WatchDimensions /> */}
            <div className="page">
                <Outlet />
            </div>
            <MobileNav />
        </div>
    )
}

export default Layout;