import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedLayout = () => {
    const { isLogin, isInitialized } = useAuth();

    if (!isInitialized) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-xl font-bold text-gray-600">Loading...</div>
            </div>
        );
    }

    if (!isLogin) { 
        window.location.href = "http://localhost:3000";
        return null;
    }

    return <Outlet />;
};

export default ProtectedLayout;