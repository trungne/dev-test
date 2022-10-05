import React from "react";
type Props = {
    width?: number,
    height?: number,
    fill?: string,
} & React.SVGProps<SVGSVGElement>
const Radio: React.FC<Props> = ({ width = 16, height = 16, fill, ...rest }) => {
    return (
        <svg {...rest} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_21_4583)">
                <path d="M8.00004 4.66671C6.16004 4.66671 4.66671 6.16004 4.66671 8.00004C4.66671 9.84004 6.16004 11.3334 8.00004 11.3334C9.84004 11.3334 11.3334 9.84004 11.3334 8.00004C11.3334 6.16004 9.84004 4.66671 8.00004 4.66671ZM8.00004 1.33337C4.32004 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.32004 14.6667 8.00004 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00004 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill={fill ?? "white"} />
            </g>
            <defs>
                <clipPath id="clip0_21_4583">
                    <rect width={width} height={height} fill={fill ?? "white"} />
                </clipPath>
            </defs>
        </svg>
    )
}

export default React.memo(Radio)