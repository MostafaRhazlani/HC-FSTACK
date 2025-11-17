import { Shield, Users, MessageSquare, TrendingUp } from "lucide-react";

const trustFeatures = [
    {
        icon: Shield,
        title: "Robust Security & KYC",
        description: "Bank-level encryption and verified user identities for complete peace of mind.",
    },
    {
        icon: Users,
        title: "Community Transparency",
        description: "Every transaction is tracked and visible to group members for full accountability.",
    },
    {
        icon: MessageSquare,
        title: "Real-time Communication",
        description: "Stay connected with your savings circle through instant messaging and updates.",
    },
    {
        icon: TrendingUp,
        title: "Smart Investment Tools",
        description: "Data-driven insights to help you make informed financial decisions.",
    },
];

const TrustFeatures = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Why Trust Home Circle?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Built on trust, powered by technology, driven by community success.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trustFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group text-center p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="inline-flex p-4 rounded-xl bg-slate-100 mb-4 transition-all duration-300 group-hover:bg-slate-200 group-hover:scale-110">
                                    <Icon className="w-8 h-8 text-slate-900" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TrustFeatures;