import { ArrowRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

interface ProductCardProps {
    logo: string;
    title: string;
    description: string;
    ctaText: string;
    accentColor: "indigo" | "teal";
}

const ProductCard = ({ logo: Logo, title, description, ctaText, accentColor }: ProductCardProps) => {

    const isIndigo = accentColor === "indigo";
    const iconBgClass = isIndigo ? "bg-indigo-100" : "bg-teal-100";

    const buttonClass = isIndigo
        ? "border-indigo-600 bg-indigo-600 hover:text-indigo-600 hover:border-indigo-600"
        : "border-teal-600 bg-teal-600 hover:bg-teal-700 hover:text-teal-600";
    const btnClassAnimate = isIndigo ? 'bg-indigo-600' : 'bg-teal-600'
    const cardClass = isIndigo ? "border-indigo-200 hover:border-indigo-400" : "border-teal-200 hover:border-teal-400";
    return (
        <div className={`bg-white border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${cardClass}`}>

            <div className="flex flex-col h-full">
                {/* Logo */}
                <div className={`inline-flex p-4 ${iconBgClass} transition-transform duration-300 group-hover:scale-105`}>
                    <img src={Logo} alt="" />
                </div>

                <div className="flex flex-col justify-between h-full p-8">
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <PrimaryButton className={buttonClass} classRec={btnClassAnimate} name={ctaText} >
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </PrimaryButton>
                    {/* <button
                        className={`inline-flex items-center justify-center group relative overflow-hidden cursor-pointer px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 w-full sm:w-auto ${buttonClass}`}
                    >
                        <div className="relative z-10 flex items-center justify-center">
                            {ctaText}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className={`absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${btnClassAnimate}`}></div>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;