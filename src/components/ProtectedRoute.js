import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPage from "../containers/LoadingPage";

const ProtectedRoute = ({ children, loginOnly = true }) => {
    const [user, isLoading] = useAuthState(auth);
    const { pathname = "" } = useLocation();
    
    
    if (!user && loginOnly) {
        return <Navigate to="/login" />;
    }

    if(user && !loginOnly) {
        return <Navigate to={`/`}/>;
    }

    return isLoading? <LoadingPage /> : children;
};

export default ProtectedRoute;