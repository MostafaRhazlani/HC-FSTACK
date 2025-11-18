interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    classRec?: string,
}
const PrimaryButton: React.FC<ButtonProps> = ({ name, className, classRec, children, ...props }: ButtonProps) => {
    const baseClasses = "relative px-4 py-1.5 text-white font-medium border-2 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group min-w-24 overflow-hidden rounded-md";
    const defaultColors = "bg-slate-900 border-slate-900 hover:text-slate-900"

    const finalClasses = className
        ? `${baseClasses} ${className}`
        : `${baseClasses} ${defaultColors}`
    return (
        <>
            <button 
                { ...props } 
                className={` ${finalClasses}`}
            >
                <span className="relative z-10 flex items-center justify-center">
                    { name }
                    { children }
                </span>
                <div className={`absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${classRec}`}></div>
            </button>
        </>
    )
}

export default PrimaryButton;