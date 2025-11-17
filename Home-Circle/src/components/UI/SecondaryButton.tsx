interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
    classRec?: string,
}
const SecondaryButton: React.FC<ButtonProps> = ({ name, classRec, className, children, ...props }: ButtonProps) => {
    return (
        <>
            <button { ...props } className={`relative px-4 py-1.5 text-base font-medium bg-white cursor-pointer text-slate-900 border-2 border-slate-900 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto overflow-hidden rounded-md ${className}`}>
                <span className="relative z-10">{ name }</span>
                { children }
                <div className={`absolute inset-0 bg-slate-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${classRec}`}></div>
            </button>
        </>
    )
}

export default SecondaryButton;