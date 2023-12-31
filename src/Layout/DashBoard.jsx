import { FaEnvelope, FaHome, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useEmployee from "../hooks/useEmployee";
import useHr from "../hooks/useHr";
import { FaChartBar, FaChartLine } from "react-icons/fa6";

const DashBoard = () => {
    const [isHr] = useHr();
    const [isEmployee] = useEmployee();
    const [isAdmin] = useAdmin();
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
                        isHr ? <>
                            <li className="flex items-center gap-2 mt-2">
                                <FaUsers></FaUsers>
                                <NavLink to='/dashboard/employee'>All Employee</NavLink>
                            </li>
                            <li className="flex items-center gap-2 mt-2">
                                <FaChartLine></FaChartLine>
                                <NavLink to='/dashboard/progress'>Progress</NavLink>
                            </li>
                        </>
                            : <>

                            </>
                    }
                    {
                        isEmployee ? <>
                            <li className="flex items-center gap-2 mt-2">
                                <FaChartBar></FaChartBar>
                                <NavLink to='/dashboard/worksheet'>Worksheet</NavLink>
                            </li>
                        </>
                            : <>

                            </>
                    }
                    {
                        isAdmin ? <>
                            <li className="flex items-center gap-2 mt-2">
                                <FaUsers></FaUsers>
                                <NavLink to='/dashboard/verified'>Verifiyed Employees</NavLink>
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