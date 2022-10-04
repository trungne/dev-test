import React from "react";

type Props = {
    width?: number,
    height?: number
    onClick?: () => void
}
const Instagram: React.FC<Props> = ({ width = 16, height = 16, onClick }) => {
    return (
        <svg onClick={onClick} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4232_3251)">
                <path d="M15.9845 4.70404C15.9471 3.8539 15.8096 3.26944 15.6126 2.76299C15.4095 2.22541 15.0969 1.74412 14.6874 1.34401C14.2873 0.937683 13.8028 0.621948 13.2715 0.421957C12.7621 0.22502 12.1807 0.0875415 11.3306 0.0500586C10.4741 0.00940124 10.2022 0 8.02987 0C5.85758 0 5.58567 0.00940124 4.73236 0.0468842C3.88222 0.0843671 3.29775 0.221967 2.79143 0.418783C2.25373 0.621948 1.77243 0.934509 1.37233 1.34401C0.966002 1.74412 0.650389 2.22858 0.450277 2.75994C0.25334 3.26944 0.115862 3.85073 0.0783788 4.70087C0.0377215 5.55736 0.0283203 5.82926 0.0283203 8.00156C0.0283203 10.1739 0.0377215 10.4458 0.0752044 11.2991C0.112687 12.1492 0.250287 12.7337 0.447225 13.2401C0.650389 13.7777 0.966002 14.259 1.37233 14.6591C1.77243 15.0654 2.2569 15.3812 2.78825 15.5812C3.29775 15.7781 3.87904 15.9156 4.72931 15.9531C5.5825 15.9907 5.85452 16 8.02682 16C10.1991 16 10.471 15.9907 11.3243 15.9531C12.1745 15.9156 12.7589 15.7781 13.2653 15.5812C14.3405 15.1654 15.1907 14.3153 15.6064 13.2401C15.8032 12.7306 15.9408 12.1492 15.9783 11.2991C16.0158 10.4458 16.0252 10.1739 16.0252 8.00156C16.0252 5.82926 16.022 5.55736 15.9845 4.70404ZM14.5437 11.2366C14.5093 12.018 14.378 12.4399 14.2686 12.7212C13.9998 13.4183 13.4466 13.9715 12.7495 14.2403C12.4682 14.3497 12.0432 14.481 11.2649 14.5153C10.421 14.5529 10.1679 14.5622 8.03305 14.5622C5.89823 14.5622 5.64196 14.5529 4.8011 14.5153C4.01969 14.481 3.59774 14.3497 3.31643 14.2403C2.96956 14.1121 2.65383 13.909 2.39755 13.6433C2.13188 13.3838 1.92871 13.0713 1.80051 12.7244C1.69112 12.4431 1.55987 12.018 1.52556 11.2397C1.48795 10.3958 1.47867 10.1426 1.47867 8.00779C1.47867 5.87297 1.48795 5.6167 1.52556 4.77596C1.55987 3.99455 1.69112 3.5726 1.80051 3.29129C1.92871 2.9443 2.13188 2.62869 2.40073 2.37229C2.66006 2.10661 2.97262 1.90345 3.31961 1.77537C3.60091 1.66597 4.02604 1.53472 4.80427 1.50029C5.64818 1.46281 5.90141 1.45341 8.0361 1.45341C10.1741 1.45341 10.4272 1.46281 11.268 1.50029C12.0494 1.53472 12.4714 1.66597 12.7527 1.77537C13.0996 1.90345 13.4153 2.10661 13.6716 2.37229C13.9373 2.63174 14.1404 2.9443 14.2686 3.29129C14.378 3.5726 14.5093 3.99761 14.5437 4.77596C14.5812 5.61987 14.5906 5.87297 14.5906 8.00779C14.5906 10.1426 14.5812 10.3927 14.5437 11.2366Z" fill="#232323" />
                <path d="M8.02961 3.8916C5.76049 3.8916 3.91943 5.73254 3.91943 8.00178C3.91943 10.271 5.76049 12.112 8.02961 12.112C10.2989 12.112 12.1398 10.271 12.1398 8.00178C12.1398 5.73254 10.2989 3.8916 8.02961 3.8916ZM8.02961 10.668C6.55752 10.668 5.36344 9.47399 5.36344 8.00178C5.36344 6.52957 6.55752 5.33561 8.02961 5.33561C9.50182 5.33561 10.6958 6.52957 10.6958 8.00178C10.6958 9.47399 9.50182 10.668 8.02961 10.668Z" fill="#232323" />
                <path d="M13.2622 3.72907C13.2622 4.25896 12.8326 4.68861 12.3026 4.68861C11.7727 4.68861 11.343 4.25896 11.343 3.72907C11.343 3.19906 11.7727 2.76953 12.3026 2.76953C12.8326 2.76953 13.2622 3.19906 13.2622 3.72907Z" fill="#232323" />
            </g>
            <defs>
                <clipPath id="clip0_4232_3251">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default React.memo(Instagram)