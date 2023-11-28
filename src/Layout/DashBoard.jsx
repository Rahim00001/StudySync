import { FaEnvelope, FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-green-300 p-5">
                <ul>
                    <li className="flex items-center gap-2 mb-2">
                        <FaHome></FaHome>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                        <FaEnvelope></FaEnvelope>
                        <NavLink to='/contact'>Contact </NavLink>
                    </li>
                    <hr />
                    {
                        isAdmin ? <>
                            <li className="flex items-center gap-2 mt-2">
                                <FaUsers></FaUsers>
                                <NavLink to='/dashboard/employee'>All Employee</NavLink>
                            </li>
                        </>
                            : <>

                            </>
                    }
                </ul>
            </div>
            {/* content */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;