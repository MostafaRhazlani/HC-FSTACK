import SecondaryButton from "../UI/SecondaryButton";
import useAuth from "../../hooks/useAuth";
import { LayoutGrid } from "lucide-react";
import { useState } from "react";


interface productProps {
    name: string,
    img: string,
    url: string
}

export const Header: React.FC = () => {

    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const handlePopup = () => {
        setIsOpen(!isOpen);
    } 

    const products: productProps[] = [
        {
            name: "Home",
            img: "/src/assets/logos/hc-logo.png",
            url: "http://localhost:3000"
        },
        {
            name: "Daret",
            img: "/src/assets/logos/dt-logo.png",
            url: "http://localhost:3001"
        },
        {
            name: "Darna",
            img: "/src/assets/logos/da-logo.png",
            url: "http://localhost:3002"
        }
    ] 
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex gap-2 items-center">
                        <div className="relative">
                            <div onClick={handlePopup} className="p-1 hover:bg-slate-900 rounded-md cursor-pointer transition-all duration-300 hover:text-white">
                                <LayoutGrid size={20}/>
                            </div>
                            {
                                isOpen ? (
                                    <div className="absolute top-10 p-2 bg-white border border-gray-200 shadow shadow-gray-200 rounded-sm min-w-48">
                                        <ul>
                                            {products.map((product, index) => {
                                                return (
                                                    <a href={product.url} key={index}>
                                                        <li className="flex items-center gap-2 hover:bg-slate-900 text-gray-600 hover:text-white p-2 rounded-sm cursor-pointer transition-all duration-300">
                                                            <div className="p-1 bg-white rounded-sm w-8 h-8">
                                                                <img src={product.img} className="w-full h-full object-contain" alt="" />
                                                            </div>
                                                            <span className="font-medium">{product.name}</span>
                                                        </li>
                                                    </a>
                                                )
                                            })}
                                        </ul>
                                    </div>

                                ) : ''
                            }
                        </div>
                        <div className="w-24 h-14">
                            <img src="/src/assets/logos/darna-logo.png" className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <SecondaryButton onClick={logout} name="Log out" />
                    </div>
                </div>
            </div>
        </nav>
    );
};