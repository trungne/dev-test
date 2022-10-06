import { clsx } from "@mantine/core"
import React, { ReactNode } from "react"
type Props = {
    children?: ReactNode,
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const CommonTab: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <div {...rest} className={clsx("py-2 px-4 md:py-[30px] md:px-[42px] font-['Poppins']", rest.className)}>
            {children}
        </div>
    )
}

export default React.memo(CommonTab)