import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from "../../components";
import { MobileNav } from '../../components';
import './index.scss';

const Layout = () =>
{ 
    let [width, setWidth] = useState(window.innerWidth);
    let [height, setHeight] = useState(window.innerHeight);

    let dynamicWidth = () => setWidth(window.innerWidth)
    let dynamicHeight = () => setHeight(window.innerHeight)


    window.addEventListener('resize', dynamicWidth);
    window.addEventListener('resize', dynamicHeight);

    console.log( "Width is: ", dynamicWidth);
    console.log( "Height is: ", dynamicHeight);

    return (
        <div>
            <Sidebar />
            {/* <h1 className='text-white text-4xl' >
                { width } by { height }
            </h1> */}
            <div className="page w-full h-full absolute">
                <Outlet />
            </div>
            <MobileNav />
        </div>
    )
}

export default Layout;