import { Outlet } from 'react-router-dom';
import { Sidebar } from "../../components";
import './index.scss';

const Layout = () =>
{
    return (
        <>
            <Sidebar />
            <div className="page w-full h-full absolute">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;