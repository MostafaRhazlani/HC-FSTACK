interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    classRec?: string,
}
const SecondaryButton: React.FC<ButtonProps> = ({ name, classRec, className, children, ...props }: ButtonProps) => {
    const baseClasses = "relative px-4 py-1.5 font-medium cursor-pointer border-2  shadow-lg hover:shadow-xl transition-all duration-300 group min-w-24 overflow-hidden rounded-md";
    const defaultColors = "bg-white text-slate-900 hover:text-white border-slate-900"
    const finalClasses = className
    ? `${baseClasses} ${className}`
    : `${baseClasses} ${defaultColors}`
    return (
        <>
            <button { ...props } className={`${finalClasses}`}>
                <span className="relative z-10">{ name }</span>
                { children }
                <div className={`absolute inset-0 bg-slate-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${classRec}`}></div>
            </button>
        </>
    )
}

export default SecondaryButton;