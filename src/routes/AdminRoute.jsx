import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()

    if (loading || isAdminLoading) {
        return <p>Loading....</p>
    }

    if (user && user?.uid && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;