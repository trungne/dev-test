import React from "react";
type Props = {
    width?: number,
    height?: number,
} & React.SVGProps<SVGSVGElement>
const Info: React.FC<Props> = ({ width = 16, height = 16, ...rest }) => {
    return (
        <svg {...rest} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.94 5.72665L8 8.77999L11.06 5.72665L12 6.66665L8 10.6667L4 6.66665L4.94 5.72665Z" fill="#1E2D3D" />
        </svg>

    )
}

export default React.memo(Info)