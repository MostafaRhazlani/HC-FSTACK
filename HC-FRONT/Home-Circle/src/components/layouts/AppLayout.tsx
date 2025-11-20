import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const AppLayout: React.FC = () => {
    const { isInitialized } = useAuth();

    if (!isInitialized) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-xl font-bold text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="pt-20">
                <Outlet/>
            </div>
            <Footer />
        </>
    )
}