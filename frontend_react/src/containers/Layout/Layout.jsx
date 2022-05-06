import { Sidebar } from "../../components";
import './Layout';

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