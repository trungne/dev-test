import React from "react";
type Props = {
    width?: number,
    height?: number,
} & React.SVGProps<SVGSVGElement>
const Car: React.FC<Props> = ({ width = 20, height = 20, ...rest }) => {
    return (
        <svg {...rest} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_7_112)">
                <path d="M8.33331 9.44444H9.99998V10.5556H8.33331V9.44444Z" fill="white" />
                <path d="M14.6944 7.87222C13.7091 6.25989 12.365 4.89673 10.7666 3.88889C10.0283 3.42091 9.18653 3.1408 8.31497 3.07301C7.44341 3.00522 6.5685 3.15182 5.76664 3.5C5.06525 3.83083 4.45494 4.32743 3.9884 4.94689C3.52187 5.56636 3.21313 6.29008 3.08886 7.05555C3.04442 7.31667 3.01108 7.56667 2.97775 7.81111C2.45761 7.89542 1.98435 8.16181 1.64243 8.56275C1.30052 8.96368 1.1122 9.47307 1.11108 10V13.4056C1.11108 13.7002 1.22815 13.9829 1.43652 14.1912C1.64489 14.3996 1.92751 14.5167 2.2222 14.5167V10C2.2222 9.70531 2.33926 9.4227 2.54763 9.21432C2.75601 9.00595 3.03862 8.88889 3.33331 8.88889H13.7389C14.8096 8.89036 15.836 9.31635 16.5932 10.0735C17.3503 10.8306 17.7763 11.857 17.7778 12.9278V13.3333H16.6666C16.432 12.7612 15.9949 12.2954 15.4388 12.025C14.8827 11.7545 14.2464 11.6983 13.6515 11.867C13.0566 12.0358 12.5446 12.4176 12.2132 12.9398C11.8819 13.4619 11.7544 14.0878 11.8551 14.6979C11.9557 15.3081 12.2775 15.8598 12.7591 16.2478C13.2406 16.6358 13.8481 16.833 14.4657 16.8016C15.0833 16.7703 15.6678 16.5127 16.1075 16.0779C16.5473 15.6431 16.8116 15.0617 16.85 14.4444H17.7778C18.0724 14.4444 18.3551 14.3274 18.5634 14.119C18.7718 13.9106 18.8889 13.628 18.8889 13.3333V12.9278C18.8866 11.7288 18.4666 10.5682 17.7011 9.64548C16.9355 8.72277 15.8723 8.09573 14.6944 7.87222ZM6.11108 7.77778H3.84997C3.84997 7.60555 3.89997 7.42778 3.93331 7.22222C4.02929 6.61192 4.27978 6.03631 4.66095 5.55012C5.04213 5.06392 5.54133 4.6833 6.11108 4.44444V7.77778ZM7.22219 7.77778V4.21111C8.25939 4.07642 9.31128 4.30407 10.2 4.85555C11.4132 5.61121 12.4602 6.60537 13.2778 7.77778H7.22219ZM14.3333 15.7667C14.0586 15.7667 13.7901 15.6852 13.5617 15.5326C13.3333 15.38 13.1553 15.1631 13.0501 14.9093C12.945 14.6555 12.9175 14.3762 12.9711 14.1068C13.0247 13.8374 13.157 13.5899 13.3512 13.3957C13.5455 13.2014 13.7929 13.0692 14.0623 13.0156C14.3318 12.962 14.611 12.9895 14.8648 13.0946C15.1186 13.1997 15.3355 13.3777 15.4881 13.6062C15.6407 13.8346 15.7222 14.1031 15.7222 14.3778C15.7222 14.7461 15.5759 15.0994 15.3154 15.3599C15.0549 15.6203 14.7017 15.7667 14.3333 15.7667Z" fill="white" />
                <path d="M7.87225 13.3333C7.63762 12.7612 7.20054 12.2954 6.64441 12.025C6.08828 11.7545 5.45205 11.6983 4.85711 11.867C4.26218 12.0358 3.75019 12.4176 3.41885 12.9398C3.0875 13.4619 2.96001 14.0878 3.06068 14.6979C3.16136 15.3081 3.48315 15.8598 3.96467 16.2478C4.44619 16.6358 5.05372 16.833 5.67132 16.8016C6.28893 16.7703 6.87338 16.5127 7.31314 16.0779C7.7529 15.6431 8.0172 15.0617 8.05559 14.4444H11V14.3056C10.989 13.9778 11.0265 13.6502 11.1111 13.3333H7.87225ZM5.55559 15.7667C5.28089 15.7667 5.01236 15.6852 4.78396 15.5326C4.55556 15.38 4.37754 15.1631 4.27242 14.9093C4.1673 14.6555 4.13979 14.3762 4.19338 14.1068C4.24697 13.8374 4.37925 13.5899 4.57349 13.3957C4.76773 13.2014 5.01521 13.0692 5.28463 13.0156C5.55404 12.962 5.8333 12.9895 6.08709 13.0946C6.34088 13.1997 6.55779 13.3778 6.71041 13.6062C6.86302 13.8346 6.94447 14.1031 6.94447 14.3778C6.94447 14.7461 6.79815 15.0994 6.53768 15.3599C6.27721 15.6203 5.92394 15.7667 5.55559 15.7667Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_7_112">
                    <rect width={width} height={height} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default React.memo(Car)