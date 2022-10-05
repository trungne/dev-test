import React from "react";
type Props = {
    width?: number,
    height?: number,
} & React.SVGProps<SVGSVGElement>
const Menu: React.FC<Props> = ({ width = 20, height = 20, ...rest }) => {
    return (
        <svg {...rest} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.96875 8.63281H17.3438C17.4297 8.63281 17.5 8.5625 17.5 8.47656V7.38281C17.5 7.29688 17.4297 7.22656 17.3438 7.22656H7.96875C7.88281 7.22656 7.8125 7.29688 7.8125 7.38281V8.47656C7.8125 8.5625 7.88281 8.63281 7.96875 8.63281ZM7.8125 12.6172C7.8125 12.7031 7.88281 12.7734 7.96875 12.7734H17.3438C17.4297 12.7734 17.5 12.7031 17.5 12.6172V11.5234C17.5 11.4375 17.4297 11.3672 17.3438 11.3672H7.96875C7.88281 11.3672 7.8125 11.4375 7.8125 11.5234V12.6172ZM17.6562 3.125H2.34375C2.25781 3.125 2.1875 3.19531 2.1875 3.28125V4.375C2.1875 4.46094 2.25781 4.53125 2.34375 4.53125H17.6562C17.7422 4.53125 17.8125 4.46094 17.8125 4.375V3.28125C17.8125 3.19531 17.7422 3.125 17.6562 3.125ZM17.6562 15.4688H2.34375C2.25781 15.4688 2.1875 15.5391 2.1875 15.625V16.7188C2.1875 16.8047 2.25781 16.875 2.34375 16.875H17.6562C17.7422 16.875 17.8125 16.8047 17.8125 16.7188V15.625C17.8125 15.5391 17.7422 15.4688 17.6562 15.4688ZM2.25391 10.1348L5.30664 12.5391C5.41992 12.6289 5.58789 12.5488 5.58789 12.4043V7.5957C5.58789 7.45117 5.42188 7.37109 5.30664 7.46094L2.25391 9.86523C2.23338 9.88119 2.21677 9.90163 2.20534 9.92499C2.19392 9.94834 2.18798 9.974 2.18798 10C2.18798 10.026 2.19392 10.0517 2.20534 10.075C2.21677 10.0984 2.23338 10.1188 2.25391 10.1348Z" fill="white" />
        </svg>


    )
}

export default React.memo(Menu)