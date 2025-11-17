interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    classRec?: string,
}
const PrimaryButton: React.FC<ButtonProps> = ({ name, className, classRec, children, ...props }: ButtonProps) => {
    return (
        <>
            <button { ...props } className={`relative px-4 py-1.5 text-base font-medium bg-slate-900 cursor-pointer text-white border-2 border-slate-900 hover:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto overflow-hidden rounded-md ${className}`}>
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