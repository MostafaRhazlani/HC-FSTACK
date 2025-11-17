import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
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