import React from "react"

const UnstyledButton: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...rest }) => {
    return <button className={`p-0 border-none cursor-pointer hover:opacity-90 ${className}`} {...rest}>
        {children}
    </button>
}

export default React.memo(UnstyledButton)