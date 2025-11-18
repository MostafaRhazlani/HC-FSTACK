import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";

export const Header: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="w-28">
                        <img src="/src/assets/logos/home-circle-logo.png" alt="" />
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <SecondaryButton name="Log In" />

                        <PrimaryButton name="Sign Up" />
                    </div>
                </div>
            </div>
        </nav>
    );
};