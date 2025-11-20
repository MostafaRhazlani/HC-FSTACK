import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
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