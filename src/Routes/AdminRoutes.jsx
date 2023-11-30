import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";

const AdminRoutes = (children) => {
    const [user, loading] = useContext(AuthContext);
    const [isAdmin, isAdminLosding] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLosding) {
        return <Spinner aria-label="Default status example" />
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;