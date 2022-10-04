import React from "react";

type Props = {
    width?: number,
    height?: number,
    onClick?: () => void
}
const Facebook: React.FC<Props> = ({ width = 16, height = 16, onClick }) => {
    return (
        <svg onClick={onClick} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4232_3255)">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.64273 8.06357V15.7995C5.64273 15.912 5.73073 16 5.84318 16H8.71307C8.82552 16 8.91352 15.912 8.91352 15.7995V7.93643H10.9963C11.0989 7.93643 11.1869 7.85819 11.1967 7.75061L11.3972 5.38386C11.407 5.2665 11.3141 5.16381 11.1967 5.16381H8.91352V3.48166C8.91352 3.08557 9.23131 2.76773 9.62733 2.76773H11.2309C11.3434 2.76773 11.4314 2.67971 11.4314 2.56724V0.200489C11.4314 0.0880195 11.3434 0 11.2309 0H8.51751C6.92856 0 5.63784 1.29095 5.63784 2.8802V5.16381H4.20045C4.088 5.16381 4 5.25183 4 5.3643V7.73105C4 7.84352 4.088 7.93154 4.20045 7.93154H5.63784V8.06357H5.64273Z" fill="#232323" />
            </g>
            <defs>
                <clipPath id="clip0_4232_3255">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default React.memo(Facebook)