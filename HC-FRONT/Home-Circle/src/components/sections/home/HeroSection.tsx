import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import PrimaryButton from "../../UI/PrimaryButton";
import SecondaryButton from "../../UI/SecondaryButton";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            <section className="relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-float-slow"></div>
                    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl animate-pulse-glow"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0">
                    <div className="absolute top-32 left-[10%] opacity-20 animate-float">
                        <Shield className="w-12 h-12 text-indigo-500" />
                    </div>
                    <div className="absolute top-48 right-[15%] opacity-20 animate-float-slow animation-delay-400">
                        <TrendingUp className="w-16 h-16 text-teal-500" />
                    </div>
                    <div className="absolute bottom-32 left-[20%] opacity-20 animate-float animation-delay-600">
                        <Users className="w-14 h-14 text-slate-900" />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-4xl mx-auto text-center">

                        <div className="mb-6 space-y-2">
                            <h1
                                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            >
                                Save Together,
                            </h1>
                            <h1
                                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <span className="relative inline-block">
                                    <span className="">
                                        Invest Smarter
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Sub-Headline */}
                        <p className={`text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            Join a trusted community where group savings meet real estate investment.
                            Build your financial future with{' '}
                            <span className="font-semibold text-indigo-600 relative">
                                Daret
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500/50"></span>
                            </span>
                            {' '}and{' '}
                            <span className="font-semibold text-teal-600 relative">
                                Darna
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500/50"></span>
                            </span>.
                        </p>

                        {/* CTAs with Enhanced Animations */}
                        <div
                            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <PrimaryButton name="Get Started">
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </PrimaryButton>

                            <SecondaryButton name="Learn More" />
                        </div>

                        {/* Stats or Trust Indicators */}
                        <div className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            {[
                                { label: "Active Users", value: "10K+" },
                                { label: "Total Saved", value: "$5M+" },
                                { label: "Properties", value: "500+" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:border-slate-900/30 transition-all duration-300 hover:shadow-sm"
                                >
                                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-600">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;