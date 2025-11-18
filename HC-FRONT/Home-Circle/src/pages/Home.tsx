import HeroSection from "../components/sections/home/HeroSection";
import HowItWorks from "../components/sections/home/HowItWorksSection";
import Products from "../components/sections/home/ProductsSection";
import TrustFeatures from "../components/sections/home/TrustSection";

export const Home: React.FC = () => {
    return (
        <>
            <HeroSection />
            <Products />
            <TrustFeatures />
            <HowItWorks />
        </>
    )
}