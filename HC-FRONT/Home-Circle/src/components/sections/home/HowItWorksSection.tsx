import { Users, Wallet, Home, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import PrimaryButton from "../../UI/PrimaryButton";

const steps = [
    {
        number: "01",
        icon: Users,
        title: "Save with Daret",
        description: "Join or create a savings circle and contribute regularly with your community.",
        color: "indigo",
        features: ["Secure contributions", "Group transparency", "Automated tracking"],
    },
    {
        number: "02",
        icon: Wallet,
        title: "Build Your Funds",
        description: "Watch your savings grow with transparent tracking and automated management.",
        color: "slate",
        features: ["Real-time updates", "Smart notifications", "Fund management"],
    },
    {
        number: "03",
        icon: Home,
        title: "Invest with Darna",
        description: "Use your accumulated funds to invest in verified real estate opportunities.",
        color: "teal",
        features: ["Verified properties", "Investment tools", "Secure transactions"],
    },
];

const HowItWorks = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="how-it-works"
            className="py-16 relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse-glow"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Simple Process</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        How It Works
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                        Your journey from saving to investing, simplified in three powerful steps.
                    </p>
                </div>

                {/* Steps Flow */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Steps Grid */}
                        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 ">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const isIndigo = step.color === "indigo";
                                const isTeal = step.color === "teal";

                                // Set classes based on new color props
                                const animatedCard = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                const delayClass = isIndigo ? 'delay-300' : isTeal ? 'delay-700' : 'delay-500'
                                const bgColorClass = isIndigo ? 'from-indigo-500/20 to-indigo-500/5' : isTeal ? 'from-teal-500/20 to-teal-500/5' : 'from-white/20 to-white/5';

                                const iconBgClass = isIndigo ? "bg-indigo-500/20 shadow-indigo-500/50" : isTeal ? "bg-teal-500/20 shadow-teal-500/50" : "bg-white/20 shadow-white/50";
                                const iconColorClass = isIndigo ? "text-indigo-400" : isTeal ? "text-teal-400" : "text-white";

                                return (
                                    <div
                                        key={index}
                                        className={`relative transition-all duration-700 ${delayClass} ${animatedCard}`}
                                    >
                                        {/* Card */}
                                        <div className={`relative h-full group bg-linear-to-br ${bgColorClass} border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                                            {/* Step Number Badge */}
                                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 transition-transform duration-300 group-hover:rotate-0">
                                                <span className="text-2xl font-bold text-slate-950">
                                                    {step.number}
                                                </span>
                                            </div>

                                            {/* Icon with Animation */}
                                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${iconBgClass} mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                                                <Icon className={`w-10 h-10 ${iconColorClass} transition-transform duration-300 group-hover:scale-110`} />
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-300 leading-relaxed mb-6">
                                                {step.description}
                                            </p>

                                            {/* Features List */}
                                            <ul className="space-y-3">
                                                {step.features.map((feature, fIndex) => (
                                                    <li
                                                        key={fIndex}
                                                        className={`flex items-center gap-2 text-sm text-slate-200 transition-all duration-300 group-hover:translate-x-2 hover:translate-x-0`}
                                                    >
                                                        <CheckCircle2 className={`w-4 h-4 ${iconColorClass}`} />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <PrimaryButton name="Start Your Journey Today" className="border border-white/20 bg-white/20 py-2 hover:text-slate-900">
                            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;