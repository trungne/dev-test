import React from "react";

type Props = {
    width?: number,
    height?: number,
    onClick?: () => void
}
const Email: React.FC<Props> = ({ width = 16, height = 16, onClick }) => {
    return (
        <svg onClick={onClick} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4232_3263)">
                <path d="M15.9961 16.0005V15.9998H16.0001V10.1318C16.0001 7.26114 15.3821 5.0498 12.0261 5.0498C10.4128 5.0498 9.33009 5.93514 8.88809 6.77447H8.84142V5.3178H5.65942V15.9998H8.97276V10.7105C8.97276 9.3178 9.23676 7.97114 10.9614 7.97114C12.6608 7.97114 12.6861 9.56047 12.6861 10.7998V16.0005H15.9961Z" fill="#232323" />
                <path d="M0.263916 5.31836H3.58125V16.0004H0.263916V5.31836Z" fill="#232323" />
                <path d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z" fill="#232323" />
            </g>
            <defs>
                <clipPath id="clip0_4232_3263">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default React.memo(Email)